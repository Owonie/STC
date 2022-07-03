import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Header from '../header/header';
import Rooms from '../rooms/rooms';

const Foyer = ({ authService, messageRepository, roomRepository }) => {
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  const [userId, setUserId] = useState(navigateState && navigateState.id);
  const [displayName, setDisplayname] = useState(
    navigateState && navigateState.displayName
  );
  const [photoURL, setphotoURL] = useState(
    navigateState && navigateState.photoURL
  );

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
        setDisplayname(user.displayName);
        setphotoURL(user.photoURL);
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
        displayName={displayName}
        photoURL={photoURL}
        authService={authService}
        roomRepository={roomRepository}
        messageRepository={messageRepository}
      />
    </div>
  );
};
export default Foyer;
