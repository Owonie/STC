import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Rooms from '../rooms/rooms';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateDisplayName,
  updateUserId,
  updatePhotoURL,
} from '../../reducers/userData';
import Login from '../login/login';

const Foyer = ({
  authService,
  messageRepository,
  roomRepository,
  videoRepository,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        dispatch(updateUserId(user.uid));
        dispatch(updateDisplayName(user.displayName));
        dispatch(updatePhotoURL(user.photoURL));
      } else {
        navigate('/');
      }
    });
  }, [authService]);

  return (
    <div>
      <Header authService={authService} />
      <Login onLogout={onLogout} authService={authService} />

      <Rooms
        authService={authService}
        roomRepository={roomRepository}
        messageRepository={messageRepository}
        videoRepository={videoRepository}
      />
    </div>
  );
};
export default Foyer;
