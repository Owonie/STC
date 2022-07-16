import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

class RoomRepository {
  constructor(app) {
    this.firestore_db = getFirestore(app);
  }
  saveRoom(userId, room) {
    getDoc(doc(this.firestore_db, 'rooms', `${room.roomId}`)).then(
      (docSnap) => {
        if (docSnap.exists()) {
          console.log('이미 있는 방입니다!');
        } else {
          setDoc(doc(this.firestore_db, 'rooms', `${room.roomId}`), {
            masterId: userId,
            roomId: room.roomId,
          });
          console.log(`${room.roomId}이(가) 만들어졌습니다!`);
        }
      }
    );
  }
  getRoom(room, data) {
    getDoc(doc(this.firestore_db, 'rooms', `${room}`)).then((docSnap) => {
      if (docSnap.exists()) {
        data(true);
      } else {
        console.log('존재하지 않는 방입니다!');
        data(false);
      }
    });
  }
}

export default RoomRepository;
