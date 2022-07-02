import React, { useRef } from 'react';
import { serverTimestamp } from 'firebase/firestore';
import styles from './message_input.module.css';

const MessageInput = ({ userId, sendMessage, roomId }) => {
  const messageRef = useRef();
  const formRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const message = {
      userId: userId,
      content: messageRef.current.value,
      time: serverTimestamp(),
    };
    sendMessage(message, roomId);
    formRef.current.reset();
  };

  return (
    <div className={styles.inputMessage}>
      <form className={styles.inputForm} ref={formRef} action=''>
        <input className={styles.input} ref={messageRef} type='text' />
      </form>
      <button className={styles.button} onClick={onSubmit}>
        <i className='fa-solid fa-paper-plane fa-2x'></i>
      </button>
    </div>
  );
};

export default MessageInput;
