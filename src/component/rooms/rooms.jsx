import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddRoomForm from '../add_room_form/add_room_form';
import JoinRoomForm from '../join_room_form/join_room_form';
import styles from './rooms.module.css';

const Rooms = ({ messageRepository, roomRepository, userId }) => {
  const navigate = useNavigate();
  const addRoom = (room) => {
    roomRepository.saveRoom(userId, room); // create new room
    messageRepository.initMessage(room); // create new message storage
  };
  const joinRoom = (userId, roomId) => {
    goToRoom(userId, roomId);
  };
  const goToRoom = (userId, roomId) => {
    navigate('/room', {
      replace: true,
      state: { userId: userId, roomId: roomId },
    });
    console.log('roomId:', roomId);
  };

  return (
    <div>
      <AddRoomForm onAdd={addRoom} />
      <JoinRoomForm userId={userId} joinRoom={joinRoom} />
    </div>
  );
};

export default Rooms;
