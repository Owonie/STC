import React from 'react';
import Chatbox from '../chatbox/chatbox';
import { useLocation } from 'react-router-dom';

const Room = ({ messageRepository }) => {
  const navigateState = useLocation().state;
  return (
    <section>
      <header>이건 채팅방이여</header>
      <h1>this is room!</h1>
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
