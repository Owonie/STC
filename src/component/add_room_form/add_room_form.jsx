import { React, useRef, useState } from 'react';
import Button from '../button/button';
import styles from './add_room_form.module.css';

const Add_room_form = ({ userId, onAdd }) => {
  const roomNameRef = useRef();
  const formRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const room = {
      userId: userId,
      roomId: roomNameRef.current.value,
    };
    console.log(`${roomNameRef.current.value}방이 만들어졌습니다!`);
    formRef.current.reset();
    onAdd(room);
  };

  return (
    <div>
      <h1>this is rooms!</h1>
      <form ref={formRef} className={styles.form}>
        <input ref={roomNameRef} type='text' />
      </form>
      <Button name='create' onClick={onSubmit} />
    </div>
  );
};

export default Add_room_form;
