import React from 'react';

const Message = (message) => {
  const { user, time, content } = message;

  return (
    <li>
      <div>
        <h1>{user}</h1>
        <h1>{time}</h1>
        <h1>{content}</h1>
      </div>
    </li>
  );
};

export default Message;
