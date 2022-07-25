import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Rooms from '../rooms/rooms';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateRoomId,
  updateInRoom,
  updateCurrentTime,
  updatePlayedVideo,
  updateDisplayName,
  updateUserId,
  updatePhotoURL,
  updateLocation,
} from '../../reducers/userData';
import Login from '../login/login';
import styles from './foyer.module.css';
import Button from '../button/button';

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
  const quitRoom = () => {
    dispatch(updateRoomId(null));
    dispatch(updateInRoom(false));
    dispatch(updateCurrentTime(null));
    dispatch(updatePlayedVideo(null));
    dispatch(updateLocation('foyer'));
    navigate('/', {
      replace: true,
    });
  };
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
        <div className={styles.quitRoom}>
          <Button name='Quit' onClick={quitRoom} />
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
