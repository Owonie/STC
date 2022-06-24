import React from 'react';
import Chatbox from '../chatbox/chatbox';

const Room = ({ messageRepository, roomId }) => {
  return (
    <section>
      <header>이건 채팅방이여</header>
      <h1>this is room!</h1>
      <Chatbox messageRepository={messageRepository} roomId={roomId} />

      <footer>이건 채팅방 밑이여</footer>
    </section>
  );
};
export default Room;
