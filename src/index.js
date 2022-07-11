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
import VideoService from './service/video_service';
import '@fortawesome/fontawesome-free/js/all.js';
import store from './store';
import { Provider } from 'react-redux';

const authService = new AuthService(firebaseApp);
const videoService = new VideoService(process.env.REACT_APP_YOUTUBE_API_KEY);
const messageRepository = new MessageRepository(firebaseApp);
const roomRepository = new RoomRepository();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App
        authService={authService}
        videoService={videoService}
        messageRepository={messageRepository}
        roomRepository={roomRepository}
      />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
