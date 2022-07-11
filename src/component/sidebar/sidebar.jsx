import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './sidebar.module.css';

const Sidebar = (props) => {
  const navigate = useNavigate();
  const onClick = (event) => {
    event.preventDefault();
    navigate(('/', event.target.value), {
      replace: false,
    });
    console.log('changed');
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
            className={`${styles.button} ${styles.btn_music}`}
            value='music'
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
