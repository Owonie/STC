import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

class RoomRepository {
  constructor(app) {
    this.firestore_db = getFirestore(app);
  }
  syncRooms() {}
  saveRoom(userId, room) {
    getDoc(doc(this.firestore_db, 'rooms', `${room.roomId}`)).then(
      (docSnap) => {
        if (docSnap.exists()) {
          console.log('이미 있는 방입니다!');
          console.log(`${docSnap.exists()}`);
        } else {
          setDoc(doc(this.firestore_db, 'rooms', `${room.roomId}`), {
            userId: userId,
            roomId: room.roomId,
          });
        }
      }
    );
  }

  removeRoom() {}
}

export default RoomRepository;
