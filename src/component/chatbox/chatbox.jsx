import React, { useState } from 'react';
import Message from '../message/message';
import MessageInput from '../message_input/message_input';
import styles from './chatbox.module.css';
const Chatbox = ({ messageRepository, roomId }) => {
  const [messages, setMessages] = useState({});
  const sendMessage = (message) => {
    setMessages((messages) => {
      const updated = { ...messages };
      updated[message.id] = message;
      return updated;
    });
    messageRepository.saveMessage(roomId, message);
  };
  return (
    <section className={styles.chatbox}>
      <h1 className={styles.title}>Chatbox!</h1>
      <ul className={styles.messages}>
        {Object.keys(messages).map((key) => (
          <Message key={key} message={messages[key]} />
        ))}
      </ul>
      <MessageInput sendMessage={sendMessage} />
    </section>
  );
};

export default Chatbox;
