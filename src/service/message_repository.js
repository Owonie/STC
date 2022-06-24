import { collection, addDoc, doc, getFirestore } from 'firebase/firestore';

class MessageRepository {
  constructor(app) {
    this.firestore_db = getFirestore(app);
  }
  syncMessage(roomName, onUpdate) {}
  saveMessage(roomName, message) {
    try {
      const docRef = addDoc(
        collection(this.firestore_db, 'rooms', `${roomName}`, 'Messages'),
        {
          name: message.name,
          content: message.content,
          time: message.time,
        }
      );
      console.log(message.content, `is sent!`);
    } catch (e) {
      console.error(`Error!: `, e);
    }
  }
}

export default MessageRepository;
