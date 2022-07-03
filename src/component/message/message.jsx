import React from 'react';
import styles from './message.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';

const Message = ({ message, userName, photoURL }) => {
  const { content, userId, displayName } = message;
  const url = photoURL || DEFAULT_IMAGE;
  return (
    <li className={userId == userName ? styles.myMessages : styles.messages}>
      <img
        className={styles.avatar}
        src={url}
        alt='profile photo'
        referrerPolicy='no-referrer'
      />
      <div className={styles.message}>
        <h1 className={userId == userName ? styles.myUserId : styles.userId}>
          {displayName}
        </h1>
        <p
          align='left'
          className={userId == userName ? styles.myContent : styles.content}
        >
          {content}
        </p>
      </div>
    </li>
  );
};

export default Message;
