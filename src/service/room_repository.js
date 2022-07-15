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
  removeRoom() {}

  getMasterId(roomId, onUpdate) {
    getDoc(doc(this.firestore_db, `rooms/${roomId}`)).then((doc) => {
      const data = doc.data().masterId;
      data && onUpdate(data);
      console.log(`masterId: `, doc.data().masterId);
    });
  }
}

export default RoomRepository;
