import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import AuthService from './service/auth_service';
import { firebaseApp, db } from './service/firebase';
import MessageRepository from './service/message_repository';
import RoomRepository from './service/room_repository';

const authService = new AuthService(firebaseApp);
const messageRepository = new MessageRepository(firebaseApp);
const roomRepository = new RoomRepository();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App
      authService={authService}
      messageRepository={messageRepository}
      roomRepository={roomRepository}
    />
  </BrowserRouter>
);

reportWebVitals();
