import {
  getDatabase,
  ref,
  set,
  remove,
  onValue,
  off,
  query,
} from 'firebase/database';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

class RoomRepository {
  constructor(app) {
    this.realtime_db = getDatabase(app);
    this.firestore_db = getFirestore(app);
  }
  syncRooms(userId, onUpdate) {
    const query = ref(this.realtime_db, `${userId}/rooms`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(query);
  }
  saveRoom(userId, room) {
    set(ref(this.realtime_db, `rooms/${room.roomId}`), userId); // Realtime database Dir
    try {
      const docRef = addDoc(collection(this.firestore_db, 'rooms'), {
        userId: room.userId,
        roomId: room.roomId,
      });
      console.log(room.roomId, `is created!`);
    } catch (e) {
      console.error(`Error!: `, e);
    }
  }

  removeRoom(userId, room) {
    remove(ref(this.realtime_db, `rooms/${userId}`), room);
  }
  getRoom(roomId) {
    const querySnapshot = getDocs(
      collection(this.firestore_db, 'rooms', `${roomId}`)
    );
    return querySnapshot;
  }
}

export default RoomRepository;
