import React, { useState } from 'react';
import styles from './sidebar.module.css';

const Sidebar = (props) => {
  const onClick = () => {};

  return (
    <div className={styles.sidebar}>
      <ul className={styles.lists}>
        <li className={styles.list}>
          <button className={`${styles.button} ${styles.btn_home}`}>
            <i className='fa-solid fa-house'></i>
          </button>
        </li>
        <li className={styles.list}>
          <button className={`${styles.button} ${styles.btn_message}`}>
            <i className='fa-solid fa-message'></i>
          </button>
        </li>
        <li className={styles.list}>
          <button className={`${styles.button} ${styles.btn_music}`}>
            <i className='fa-solid fa-compact-disc'></i>
          </button>
        </li>
        <li className={styles.list}>
          <button className={`${styles.button} ${styles.btn_settings}`}>
            <i className='fa-solid fa-gear'></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
