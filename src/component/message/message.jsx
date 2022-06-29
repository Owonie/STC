import React from 'react';
import styles from './message.module.css';

const Message = ({ message }) => {
  const { content, userId } = message;

  return (
    <li className={styles.messages}>
      <div className={styles.message}>
        <h1 className={styles.userId}>{userId}</h1>
        <p className={styles.content}>{content}</p>
      </div>
    </li>
  );
};

export default Message;
