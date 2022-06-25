import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Header from '../header/header';
import Rooms from '../rooms/rooms';

const Foyer = ({ authService, messageRepository, roomRepository }) => {
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
      <Rooms
        userId={userId}
        roomRepository={roomRepository}
        messageRepository={messageRepository}
      />
    </div>
  );
};
export default Foyer;
