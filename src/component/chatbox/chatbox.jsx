import React, { useState } from 'react';
import Message from '../message/message';
import MessageInput from '../message_input/message_input';
import styles from './chatbox.module.css';
const Chatbox = ({ roomId, userId, sendMessage }) => {
  const [messages, setMessages] = useState({});

  return (
    <section className={styles.chatbox}>
      <h1 className={styles.title}>Chatbox!</h1>
      <ul className={styles.messages}></ul>
      <MessageInput
        messages={messages}
        userId={userId}
        roomId={roomId}
        sendMessage={sendMessage}
      />
    </section>
  );
};

export default Chatbox;
