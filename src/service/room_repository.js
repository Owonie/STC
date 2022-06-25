import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

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
    setDoc(doc(this.firestore_db, 'rooms', `${room.roomId}`), {
      userId: userId,
      roomId: room.roomId,
    });
  }

  removeRoom(userId, room) {
    remove(ref(this.realtime_db, `rooms/${userId}`), room);
  }
}

export default RoomRepository;
