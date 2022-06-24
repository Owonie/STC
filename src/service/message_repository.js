import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

class MessageRepository {
  syncMessage(roomName, onUpdate) {
    const docref = doc(db, `${roomName}`, 'Messages');
    docref.on('value', (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ReferenceError.off();
  }
  saveMessage(roomName, message) {
    doc(db, `${roomName}`, 'Messages').setDoc(message);
  }
}

export default MessageRepository;
