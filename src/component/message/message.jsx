import React from 'react';
import styles from './message.module.css';

const Message = ({ message }) => {
  const { name, content, time } = message;
  <li className={styles.message}>
    <div className={styles.content}>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.content}>{content}</p>
      <h1 className={styles.time}>{time}</h1>
    </div>
  </li>;
};

export default Message;
