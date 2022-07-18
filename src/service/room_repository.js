import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

class RoomRepository {
  constructor(app) {
    this.firestore_db = getFirestore(app);
  }
  saveRoom(userId, room) {
    getDoc(doc(this.firestore_db, 'rooms', `${room.roomId}`)).then(
      (docSnap) => {
        if (docSnap.exists()) {
          toast.error('이미 있는 방입니다!', { autoClose: 1000 });
        } else {
          setDoc(doc(this.firestore_db, 'rooms', `${room.roomId}`), {
            masterId: userId,
            roomId: room.roomId,
          });
          toast.success('방이 생성됐습니다!', { autoClose: 1000 });
        }
      }
    );
  }
  getRoom(room, data) {
    getDoc(doc(this.firestore_db, 'rooms', `${room}`)).then((docSnap) => {
      if (docSnap.exists()) {
        toast.success('방에 입장합니다!', { autoClose: 1000 });
        data(true);
      } else {
        toast.error('존재하지 않는 방입니다!', { autoClose: 1000 });
        data(false);
      }
    });
  }
}

export default RoomRepository;
