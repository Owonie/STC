import React, { useRef } from 'react';
import Button from '../button/button';
import { serverTimestamp } from 'firebase/firestore';

const MessageInput = ({ userId, sendMessage, roomId }) => {
  const messageRef = useRef();
  const formRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const message = {
      userId: userId,
      content: messageRef.current.value,
      time: serverTimestamp(),
    };
    sendMessage(message, roomId);
    formRef.current.reset();
  };

  return (
    <div>
      <form ref={formRef} action=''>
        <input ref={messageRef} type='text' />
      </form>
      <Button name='send' onClick={onSubmit} />
    </div>
  );
};

export default MessageInput;
