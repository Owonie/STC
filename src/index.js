import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import AuthService from './service/auth_service';
import ChatService from './service/chat_service';
import { firebaseApp, db } from './service/firebase';
import MessageRepository from './service/message_repository';
import RoomRepository from './service/room_repository';

const authService = new AuthService(firebaseApp);
const chatService = new ChatService(db);
const messageRepository = new MessageRepository();
const roomRepository = new RoomRepository();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        authService={authService}
        chatService={chatService}
        messageRepository={messageRepository}
        roomRepository={roomRepository}
      />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
