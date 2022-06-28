import React, { useCallback, useEffect, useState } from 'react';
import Chatbox from '../chatbox/chatbox';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../button/button';

const Room = ({ messageRepository }) => {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  const quitRoom = () => {
    navigate('/foyer', {
      replace: true,
    });
    console.log('방에서 퇴장했습니다!');
  };

  const sendMessage = (message, roomId) => {
    messageRepository.saveMessage(message, roomId);
  };
  useEffect(() => {
    messageRepository.syncMessage(navigateState.roomId);
  }, [messageRepository]);

  return (
    <section>
      <header>{navigateState.roomId}</header>
      <Button name='Quit' onClick={quitRoom} />
      <Chatbox
        messageRepository={messageRepository}
        roomId={navigateState.roomId}
        userId={navigateState.userId}
        sendMessage={sendMessage}
      />
      <footer>이건 채팅방 밑이여</footer>
    </section>
  );
};
export default Room;
