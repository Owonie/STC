import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddRoomForm from '../add_room_form/add_room_form';
import JoinRoomForm from '../join_room_form/join_room_form';
import styles from './rooms.module.css';

const Rooms = ({ roomRepository, userId }) => {
  const [rooms, setRoom] = useState({ roomName: null });
  const navigate = useNavigate();
  const addRoom = (room) => {
    setRoom((rooms) => {
      const updated = { ...rooms };
      updated[room.id] = room;
      return updated;
    });
    roomRepository.saveRoom(userId, room);
  };
  const joinRoom = (event) => {
    roomRepository //
      .getRoom(event.current.value)
      .then((data) => goToRoom(data));
  };
  const goToRoom = (roomId) => {
    navigate('/room', { replace: true, state: { roomId: `${roomId}` } });
  };

  return (
    <div>
      <AddRoomForm userId={userId} rooms={rooms} onAdd={addRoom} />
      <JoinRoomForm joinRoom={joinRoom} />
    </div>
  );
};

export default Rooms;
