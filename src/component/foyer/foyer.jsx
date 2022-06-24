import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Header from '../header/header';
import Room from '../room/room';
import Rooms from '../rooms/rooms';

const Foyer = ({
  authService,
  chatService,
  messageRepository,
  roomRepository,
}) => {
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  const [userId, setUserId] = useState(navigateState && navigateState.id);

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/');
      }
    });
  }, [authService]);

  return (
    <div>
      <Header onLogout={onLogout} />
      <h1>this is foyer!</h1>
      <Room />
      <Rooms userId={userId} roomRepository={roomRepository} />
    </div>
  );
};
export default Foyer;
