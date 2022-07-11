import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Rooms from '../rooms/rooms';
import { useDispatch } from 'react-redux';
import {
  updateDisplayName,
  updateUserId,
  updatePhotoURL,
} from '../../reducers/userData';

const Foyer = ({ authService, messageRepository, roomRepository }) => {
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
      <Header onLogout={onLogout} />
      <h1>this is foyer!</h1>
      <Rooms
        authService={authService}
        roomRepository={roomRepository}
        messageRepository={messageRepository}
      />
    </div>
  );
};
export default Foyer;
