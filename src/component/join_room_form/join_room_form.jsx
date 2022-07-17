import { React, useRef } from 'react';
import Button from '../button/button';
import styles from './join_room_form.module.css';

const JoinRoomForm = ({ joinRoom }) => {
  const formRef = useRef();
  const roomNameRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const room = roomNameRef.current.value;
    formRef.current.reset();
    joinRoom(room);
  };
  const onKeyPress = (event) => {
    if (event.key == 'Enter') {
      if (roomNameRef.current.value.trim() == '') {
        formRef.current.reset();
        return event.preventDefault();
      }
      onSubmit(event);
    }
  };

  return (
    <div>
      <h1>Join us!</h1>
      <form ref={formRef} className={styles.form}>
        <input ref={roomNameRef} type='text' onKeyPress={onKeyPress} />
      </form>
      <Button name='join' onClick={onSubmit} />
    </div>
  );
};
export default JoinRoomForm;
