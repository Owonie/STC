import React from 'react';
import Header from '../header/header';
import Message from '../message/message';

const Room = ({ rooms }) => {
  return (
    <section>
      <Header />
      {Object.keys(rooms).map((key) => (
        <Message key={key} room={rooms[key]} />
      ))}

      <Footer />
    </section>
  );
};
export default Room;
