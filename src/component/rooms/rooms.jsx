import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddRoomForm from '../add_room_form/add_room_form';
import JoinRoomForm from '../join_room_form/join_room_form';
import { useSelector, useDispatch } from 'react-redux';
import { updateRoomId, updateInRoom } from '../../reducers/userData';
import styles from './rooms.module.css';
import 'react-toastify/dist/ReactToastify.css';

const Rooms = ({ messageRepository, roomRepository }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userData.userId);
  const navigate = useNavigate();

  const addRoom = (room) => {
    roomRepository.saveRoom(userId, room);
    messageRepository.initMessage(room);
  };

  const joinRoom = (room) => {
    goToRoom(room);
  };

  const goToRoom = (room) => {
    roomRepository.getRoom(room, (data) => {
      console.log(data);
      const event = data;
      if (event == true) {
        dispatch(updateRoomId(room));
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
