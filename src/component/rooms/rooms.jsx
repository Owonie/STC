import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddRoomForm from '../add_room_form/add_room_form';
import JoinRoomForm from '../join_room_form/join_room_form';
import styles from './rooms.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateRoomId } from '../../reducers/userData';

const Rooms = ({ messageRepository, roomRepository }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userData.userId);

  const navigate = useNavigate();
  const addRoom = (room) => {
    roomRepository.saveRoom(userId, room);
    messageRepository.initMessage(room);
  };
  const joinRoom = (event) => {
    goToRoom(event);
  };
  const goToRoom = (event) => {
    dispatch(updateRoomId(event));
    navigate('/room');
  };

  return (
    <div>
      <AddRoomForm onAdd={addRoom} />
      <JoinRoomForm joinRoom={joinRoom} />
    </div>
  );
};

export default Rooms;
