import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';

class RoomRepository {
  constructor(app) {
    this.db = getDatabase(app);
  }
  syncRooms(userId, onUpdate) {
    const query = ref(this.db, `${userId}/rooms`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(query);
  }
  saveRoom(userId, room) {
    set(ref(this.db, `rooms/${userId}`), room);
  }

  removeRoom(userId, room) {
    remove(ref(this.db, `rooms/${userId}`), room);
  }
}

export default RoomRepository;
