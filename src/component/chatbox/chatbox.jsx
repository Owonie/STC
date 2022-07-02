import React, { useEffect, useState } from 'react';
import Message from '../message/message';
import MessageInput from '../message_input/message_input';
import styles from './chatbox.module.css';
const Chatbox = ({ roomId, userId, sendMessage, messages }) => {
  return (
    <section className={styles.chatbox}>
      <div className={styles.container}>
        <div className={styles.userlist}>userList</div>
        <ul className={styles.messages}>
          {Object.keys(messages).map((key) => (
            <Message key={key} message={messages[key]} />
          ))}
        </ul>
        <div className={styles.messageInput}>
          <MessageInput
            userId={userId}
            roomId={roomId}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </section>
  );
};

export default Chatbox;
