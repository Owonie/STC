import {
  addDoc,
  doc,
  getFirestore,
  setDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';

class VideoRepository {
  constructor(app) {
    this.firestore_db = getFirestore(app);
  }
  syncVideo(roomId, onUpdate) {
    const ref = collection(this.firestore_db, `rooms/${roomId}/videos`);
    const q = query(ref, orderBy('uploadTime', 'asc'));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        videoId: doc.data().videoId,
        uploadTime: doc.data().uploadTime,
        thumbnail: doc.data().thumbnail,
      }));
      data && onUpdate(data);
    });
    return () => unsub();
  }
  initVideo(room) {
    setDoc(doc(this.firestore_db, `rooms/${room.roomId}/videos`, 'init'), {
      content: 'init completed!',
    });
  }
  saveVideo(video, roomId) {
    addDoc(collection(this.firestore_db, `rooms/${roomId}/videos`), {
      videoId: video.id,
      uploadTime: serverTimestamp(),
      thumbnail: video.snippet.thumbnails.default,
    });
  }
}

export default VideoRepository;
