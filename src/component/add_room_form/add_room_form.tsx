import React, { memo, useRef } from 'react';
import Button from '../button/button';
import styles from './add_room_form.module.css';

type AddRoomFormProps = {
  onAdd: (room: string) => void;
};
const AddRoomForm = memo(({ onAdd }: AddRoomFormProps) => {
  const roomIdRef = useRef<HTMLInputElement>();
  const formRef = useRef<HTMLFormElement>();
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const room = roomIdRef.current.value;
    formRef.current.reset();
    onAdd(room);
  };
  const onKeyPress = (event: React.KeyboardEvent) => {
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
      <h1>방 만들기</h1>
      <form ref={formRef} className={styles.form}>
        <input ref={roomIdRef} type='text' onKeyPress={onKeyPress} />
      </form>
      <Button name='생성' onClick={onSubmit} />
    </div>
  );
});

export default AddRoomForm;
