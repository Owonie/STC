import {
  addDoc,
  setDoc,
  doc,
  getFirestore,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  getDoc,
} from 'firebase/firestore';

class VideoRepository {
  constructor(app) {
    this.firestore_db = getFirestore(app);
  }
  syncVideoList(roomId, onUpdate) {
    const ref = collection(this.firestore_db, `rooms/${roomId}/videos`);
    const q = query(ref, orderBy('time', 'asc'));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      data && onUpdate(data);
    });
    return () => unsub();
  }
  syncVideoState(roomId, onUpdate) {
    const ref = doc(this.firestore_db, `rooms/${roomId}/videoState/State`);
    const unsub = onSnapshot(ref, (doc) => {
      const data = doc.data();
      data && onUpdate(data);
    });
    return () => unsub();
  }
  saveVideoState(state, roomId) {
    setDoc(doc(this.firestore_db, `rooms/${roomId}/videoState`, 'State'), {
      State: state,
    });
  }
  syncVideoId(roomId, onUpdate) {
    const ref = doc(this.firestore_db, `rooms/${roomId}/videoState/VideoId`);
    const unsub = onSnapshot(ref, (doc) => {
      const data = doc.data();
      data && onUpdate(data);
    });
    return () => unsub();
  }
  saveVideoId(video, roomId) {
    setDoc(doc(this.firestore_db, `rooms/${roomId}/videoState`, 'VideoId'), {
      Video: video,
    });
  }
  saveVideo(video, roomId) {
    addDoc(collection(this.firestore_db, `rooms/${roomId}/videos`), {
      video: video,
      time: serverTimestamp(),
    });
  }
}

export default VideoRepository;
