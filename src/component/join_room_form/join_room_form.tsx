import React, { memo, useRef } from 'react';
import Button from '../button/button';
import styles from './join_room_form.module.css';

type JoinRoomFormProps = {
  joinRoom: (room: string) => void;
};
const JoinRoomForm = memo(({ joinRoom }: JoinRoomFormProps) => {
  const formRef = useRef<HTMLFormElement>();
  const roomNameRef = useRef<HTMLInputElement>();
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const room = roomNameRef.current.value;
    formRef.current.reset();
    joinRoom(room);
  };
  const onKeyPress = (event: React.KeyboardEvent) => {
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
      <h1>방 입장하기</h1>
      <form ref={formRef} className={styles.form}>
        <input ref={roomNameRef} type='text' onKeyPress={onKeyPress} />
      </form>
      <Button name='입장' onClick={onSubmit} />
    </div>
  );
});
export default JoinRoomForm;
