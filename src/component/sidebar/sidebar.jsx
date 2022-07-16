import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './sidebar.module.css';

const Sidebar = (props) => {
  const navigate = useNavigate();
  const roomId = useSelector((state) => state.userData.roomId);

  const onClick = (event) => {
    event.preventDefault();
    if (event.target.value == 'foyer') {
      navigate(('/', event.target.value), {
        replace: true,
      });
    }
    if (roomId == null) {
      if (event.target.value == 'room' || event.target.value == 'video') {
        console.log(
          `아직 방이 존재하지 않습니다. 채팅방을 만들거나 입장해주세요.`
        );
      }
    }
    if (roomId != null) {
      navigate(('/', event.target.value), {
        replace: true,
      });
    }
  };

  return (
    <div className={styles.sidebar}>
      <ul className={styles.lists}>
        <li className={styles.list}>
          <button
            className={`${styles.button} ${styles.btn_foyer}`}
            value='foyer'
            onClick={onClick}
          >
            <i className='fa-solid fa-house'></i>
          </button>
        </li>
        <li className={styles.list}>
          <button
            className={`${styles.button} ${styles.btn_room}`}
            value='room'
            onClick={onClick}
          >
            <i className='fa-solid fa-message'></i>
          </button>
        </li>
        <li className={styles.list}>
          <button
            className={`${styles.button} ${styles.btn_video}`}
            value='video'
            onClick={onClick}
          >
            <i className='fa-solid fa-compact-disc'></i>
          </button>
        </li>
        <li className={styles.list}>
          <button
            className={`${styles.button} ${styles.btn_settings}`}
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
