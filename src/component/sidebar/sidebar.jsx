import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateInRoom, updateLocation } from '../../reducers/userData';
import styles from './sidebar.module.css';

const Sidebar = (props) => {
  const navigate = useNavigate();
  const roomId = useSelector((state) => state.userData.roomId);
  const location = useSelector((state) => state.userData.location);
  const dispatch = useDispatch();

  const onClick = (event) => {
    event.preventDefault();
    if (roomId == null) {
      if (event.target.value == 'room' || event.target.value == 'video') {
        toast.error(' 우선 방을 만들거나 입장해주세요.', { autoClose: 1500 });
      }
    }
    if (roomId != null) {
      if (event.target.value == 'room') {
        dispatch(updateInRoom(true));
        dispatch(updateLocation(event.target.value));
        navigate(('/', event.target.value), {
          replace: true,
        });
      }
      if (event.target.value != 'room') {
        dispatch(updateInRoom(false));
        dispatch(updateLocation(event.target.value));
        navigate(('/', event.target.value), {
          replace: true,
        });
      }
    }
  };

  return (
    <div className={styles.sidebar}>
      <ul className={styles.lists}>
        <li className={styles.list}>
          <button
            className={`${styles.button} ${
              location == '' ? styles.clicked : ''
            }`}
            value=''
            onClick={onClick}
          >
            <i className='fa-solid fa-house'></i>
          </button>
        </li>
        <li className={styles.list}>
          <button
            className={`${styles.button} ${
              location == 'room' ? styles.clicked : ''
            }`}
            value='room'
            onClick={onClick}
          >
            <i className='fa-solid fa-message'></i>
          </button>
        </li>
        <li className={styles.list}>
          <button
            className={`${styles.button} ${
              location == 'video' ? styles.clicked : ''
            }`}
            value='video'
            onClick={onClick}
          >
            <i className='fa-solid fa-compact-disc'></i>
          </button>
        </li>
        <li className={styles.list}>
          <button
            className={`${styles.button} ${
              location == 'settings' ? styles.clicked : ''
            }`}
            value='settings'
            onClick={onClick}
          >
            <i className='fa-solid fa-gear'></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
