import React, { useCallback, useEffect, useRef } from 'react';
import Message from '../message/message';
import MessageInput from '../message_input/message_input';
import styles from './chatbox.module.css';
import { useSelector } from 'react-redux';

const Chatbox = ({ sendMessage, messages }) => {
  const userId = useSelector((state) => state.userData.userId);
  const displayName = useSelector((state) => state.userData.displayName);
  const roomId = useSelector((state) => state.userData.roomId);
  const photoURL = useSelector((state) => state.userData.photoURL);

  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);
  return (
    <section className={styles.chatbox}>
      <div className={styles.container}>
        <div className={styles.userlist}>userList</div>
        <ul className={styles.messages} ref={scrollRef}>
          {Object.keys(messages).map((key) => (
            <Message key={key} message={messages[key]} userName={userId} />
          ))}
        </ul>
        <div className={styles.messageInput}>
          <MessageInput
            userId={userId}
            roomId={roomId}
            displayName={displayName}
            photoURL={photoURL}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </section>
  );
};

export default Chatbox;
