import React, { useEffect, useState } from 'react';
import Chatbox from '../chatbox/chatbox';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../button/button';
import styles from './room.module.css';
import Header from '../header/header';

const Room = ({ messageRepository }) => {
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  const [messages, setMessages] = useState({});
  const [onchat, setOnchat] = useState(true);

  const quitRoom = () => {
    setOnchat(false);
    navigate('/foyer', {
      replace: true,
    });
    console.log('방에서 퇴장했습니다!');
  };

  const sendMessage = (message, roomId) => {
    messageRepository.saveMessage(message, roomId);
  };

  useEffect(() => {
    if (onchat == false) {
      return;
    }
    const stopSync = messageRepository.syncMessage(
      navigateState.roomId,
      (docs) => {
        setMessages(docs);
      }
    );
    return () => stopSync();
  }, [onchat, messageRepository]);

  return (
    <section className={styles.room}>
      <div className={styles.header}>
        <Header />
      </div>
      <Button name='Quit' onClick={quitRoom} />
      <div className={styles.container}>
        <div className={styles.musicplayer}>Music!</div>
        <div className={styles.chatbox}>
          <Chatbox
            messageRepository={messageRepository}
            roomId={navigateState.roomId}
            userId={navigateState.userId}
            sendMessage={sendMessage}
            messages={messages}
          />
        </div>
      </div>
      <footer>이건 채팅방 밑이여</footer>
    </section>
  );
};
export default Room;
