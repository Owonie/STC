import {
  addDoc,
  doc,
  getFirestore,
  setDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';

class MessageRepository {
  constructor(app) {
    this.firestore_db = getFirestore(app);
  }
  syncMessage(roomId) {
    const q = query(
      collection(this.firestore_db, `rooms/${roomId}/messages`),
      orderBy('time', 'desc')
    );
    onSnapshot(q, { includeMetadataChanges: true }, (docs) => {
      const messages = [];
      docs.docChanges().forEach((change) => {
        if (change.type === 'added') {
          messages.push(change.doc.data().content);
        }
      });
      console.log(messages);
    });
  }
  initMessage(room) {
    setDoc(doc(this.firestore_db, `rooms/${room.roomId}/messages`, 'init'), {
      content: 'init completed!',
    });
  }
  saveMessage(message, roomId) {
    addDoc(collection(this.firestore_db, `rooms/${roomId}/messages`), {
      userId: message.userId,
      content: message.content,
      time: serverTimestamp(),
    });
  }
}

export default MessageRepository;
