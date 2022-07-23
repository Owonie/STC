import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Rooms from '../rooms/rooms';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateDisplayName,
  updateUserId,
  updatePhotoURL,
  updateLocation,
} from '../../reducers/userData';
import Login from '../login/login';
import styles from './foyer.module.css';

const Foyer = ({
  authService,
  messageRepository,
  roomRepository,
  videoRepository,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const photoURL = useSelector((state) => state.userData.photoURL);
  const displayName = useSelector((state) => state.userData.displayName);

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
  useEffect(() => {
    dispatch(updateLocation(``));
  }, []);

  return (
    <div className={styles.foyer}>
      <Header authService={authService} />
      <div className={styles.container}>
        <div className={styles.profile}>
          <img
            className={styles.avatar}
            src={photoURL}
            alt='profile photo'
            referrerPolicy='no-referrer'
          />
          <h2 className={styles.displayName}>{displayName}</h2>
        </div>
        <div className={styles.login}>
          <Login onLogout={onLogout} authService={authService} />
        </div>
        <div className={styles.rooms}>
          <Rooms
            authService={authService}
            roomRepository={roomRepository}
            messageRepository={messageRepository}
            videoRepository={videoRepository}
          />
        </div>
      </div>
    </div>
  );
};
export default Foyer;
