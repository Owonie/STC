import React from 'react';
import Chatbox from '../chatbox/chatbox';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../button/button';

const Room = ({ messageRepository }) => {
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  const quitRoom = () => {
    navigate('/foyer', {
      replace: true,
    });
  };

  return (
    <section>
      <header>{navigateState.roomId}</header>
      <Button name='Quit' onClick={quitRoom} />
      <Chatbox
        messageRepository={messageRepository}
        roomId={navigateState.roomId}
        userId={navigateState.userId}
      />
      <footer>이건 채팅방 밑이여</footer>
    </section>
  );
};
export default Room;
