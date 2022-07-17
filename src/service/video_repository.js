import {
  addDoc,
  getFirestore,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore';
import { toast } from 'react-toastify';

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

  saveVideo(video, roomId) {
    addDoc(collection(this.firestore_db, `rooms/${roomId}/videos`), {
      video: video,
      time: serverTimestamp(),
    });
    toast.success('Video Added!', { autoClose: 1000 });
  }
}

export default VideoRepository;
