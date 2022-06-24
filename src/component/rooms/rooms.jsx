import { React, useState } from 'react';
import Add_room_form from '../add_room_form/add_room_form';
import styles from './rooms.module.css';

const Rooms = ({ roomRepository, userId }) => {
  const [rooms, setRoom] = useState({ roomName: null });

  const addRoom = (room) => {
    setRoom((rooms) => {
      const updated = { ...rooms };
      updated[room.id] = room;
      return updated;
    });
    roomRepository.saveRoom(userId, room);
  };

  return (
    <div>
      <Add_room_form userId={userId} rooms={rooms} onAdd={addRoom} />
    </div>
  );
};

export default Rooms;
