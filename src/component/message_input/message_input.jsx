import React, { useRef } from 'react';
import { serverTimestamp } from 'firebase/firestore';
import styles from './message_input.module.css';

const MessageInput = ({
  userId,
  displayName,
  sendMessage,
  roomId,
  photoURL,
  scrollRef,
}) => {
  const messageRef = useRef();
  const formRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const message = {
      userId: userId,
      roomId: roomId,
      content: messageRef.current.value,
      time: serverTimestamp(),
      displayName: displayName,
      photoURL: photoURL,
    };
    sendMessage(message, scrollRef);
    formRef.current.reset();
  };
  const onKeyPress = (event) => {
    if (event.key == 'Enter') {
      onSubmit(event);
    }
  };

  return (
    <div className={styles.inputMessage}>
      <form className={styles.inputForm} ref={formRef} action=''>
        <input
          className={styles.input}
          ref={messageRef}
          type='text'
          onKeyPress={onKeyPress}
        />
      </form>
      <button className={styles.button} onClick={onSubmit}>
        <i className='fa-solid fa-paper-plane fa-2x'></i>
      </button>
    </div>
  );
};

export default MessageInput;
