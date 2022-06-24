import { getFirestore, doc, setDoc } from 'firebase/firestore';

class ChatService {
  constructor() {
    this.db = getFirestore();
  }

  getIn(roomName) {
    const room = this.getRoom(roomName);
  }

  getOut(roomName) {}

  getRoom(roomName) {}
}

export default ChatService;
