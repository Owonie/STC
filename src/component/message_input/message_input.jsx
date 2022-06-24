import React, { useRef } from 'react';
import Button from '../button/button';

const MessageInput = ({ userId, sendMessage }) => {
  const messageRef = useRef();
  const formRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const message = {
      userId: userId,
      content: messageRef.current.value,
    };
    console.log(`${messageRef.current.value}`);
    formRef.current.reset();
    sendMessage(message);
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
