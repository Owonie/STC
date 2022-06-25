import React, { useState } from 'react';
import Message from '../message/message';
import MessageInput from '../message_input/message_input';
import styles from './chatbox.module.css';
const Chatbox = ({ messageRepository, roomId, userId }) => {
  const [messages, setMessages] = useState({});
  const sendMessage = (message, roomId) => {
    setMessages((messages) => {
      const updated = { ...messages };
      updated[message.id] = message;
      return updated;
    });
    messageRepository.saveMessage(message, roomId);
  };
  return (
    <section className={styles.chatbox}>
      <h1 className={styles.title}>Chatbox!</h1>
      <ul className={styles.messages}>
        {Object.keys(messages).map((key) => (
          <Message key={key} message={messages[key]} />
        ))}
      </ul>
      <MessageInput userId={userId} roomId={roomId} sendMessage={sendMessage} />
    </section>
  );
};

export default Chatbox;
