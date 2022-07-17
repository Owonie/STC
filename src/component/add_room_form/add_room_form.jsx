import React, { memo, useRef } from 'react';
import Button from '../button/button';
import styles from './add_room_form.module.css';

const AddRoomForm = memo(({ onAdd }) => {
  const roomIdRef = useRef();
  const formRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const room = {
      roomId: roomIdRef.current.value,
    };
    formRef.current.reset();
    onAdd(room);
  };
  const onKeyPress = (event) => {
    if (event.key == 'Enter') {
      if (roomIdRef.current.value.trim() == '') {
        formRef.current.reset();
        return event.preventDefault();
      }
      onSubmit(event);
    }
  };

  return (
    <div>
      <h1>this is rooms!</h1>
      <form ref={formRef} className={styles.form}>
        <input ref={roomIdRef} type='text' onKeyPress={onKeyPress} />
      </form>
      <Button name='create' onClick={onSubmit} />
    </div>
  );
});

export default AddRoomForm;
