import React, { useEffect, useState } from 'react';
import Message from '../message/message';
import MessageInput from '../message_input/message_input';
import styles from './chatbox.module.css';
const Chatbox = ({
  roomId,
  userId,
  displayName,
  photoURL,
  sendMessage,
  messages,
}) => {
  return (
    <section className={styles.chatbox}>
      <div className={styles.container}>
        <div className={styles.userlist}>userList</div>
        <ul className={styles.messages}>
          {Object.keys(messages).map((key) => (
            <Message
              key={key}
              message={messages[key]}
              userName={userId}
              displayName={displayName}
              photoURL={photoURL}
            />
          ))}
        </ul>
        <div className={styles.messageInput}>
          <MessageInput
            userId={userId}
            roomId={roomId}
            displayName={displayName}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </section>
  );
};

export default Chatbox;
