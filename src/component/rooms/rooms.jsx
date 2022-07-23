import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddRoomForm from '../add_room_form/add_room_form';
import JoinRoomForm from '../join_room_form/join_room_form';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateRoomId,
  updateInRoom,
  updateLocation,
} from '../../reducers/userData';
import { toast } from 'react-toastify';
import styles from './rooms.module.css';

const Rooms = ({ messageRepository, roomRepository }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userData.userId);
  const roomId = useSelector((state) => state.userData.roomId);
  const navigate = useNavigate();

  const addRoom = (room) => {
    if (roomId) {
      return toast.error(`입장 중인 방: <${roomId}>`, {
        autoClose: 1000,
      });
    }
    roomRepository.saveRoom(userId, room);
    messageRepository.initMessage(room);
  };

  const joinRoom = (room) => {
    if (roomId) {
      if (room == roomId) {
        navigate('/room');
      } else {
        return toast.error(`입장 중인 방: <${roomId}>`, {
          autoClose: 1000,
        });
      }
    }
    goToRoom(room);
  };

  const goToRoom = (room) => {
    roomRepository.getRoom(room, (data) => {
      const event = data;
      if (event == true) {
        dispatch(updateRoomId(room));
        dispatch(updateLocation('room'));
        dispatch(updateInRoom(true));
        navigate('/room');
      }
    });
  };

  return (
    <div>
      <AddRoomForm onAdd={addRoom} />
      <JoinRoomForm joinRoom={joinRoom} />
    </div>
  );
};

export default Rooms;
