import {
  addDoc,
  doc,
  getFirestore,
  setDoc,
  collection,
} from 'firebase/firestore';

class MessageRepository {
  constructor(app) {
    this.firestore_db = getFirestore(app);
  }
  syncMessage(roomId, onUpdate) {}
  initMessage(room) {
    setDoc(doc(this.firestore_db, `rooms/${room.roomId}/messages`, 'init'), {
      content: 'init completed!',
    });
  }
  saveMessage(message, roomId) {
    addDoc(collection(this.firestore_db, `rooms/${roomId}/messages`), {
      userId: message.userId,
      content: message.content,
      time: message.time,
    });
    console.log('메세지 내용: ', message.content);
  }
}

export default MessageRepository;
