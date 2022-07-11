import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useDispatch } from 'react-redux';
import {
  updateDisplayName,
  updateUserId,
  updatePhotoURL,
} from '../../reducers/userData';

const Login = ({ authService }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) =>
        goToFoyer(data.user.uid, data.user.displayName, data.user.photoURL)
      );
  };

  const goToFoyer = (userId, displayName, photoURL) => {
    dispatch(updateUserId(userId));
    dispatch(updateDisplayName(displayName));
    dispatch(updatePhotoURL(photoURL));
    navigate(`/foyer`);
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToFoyer(user.uid);
    });
  });

  return (
    <div>
      <Header />
      <h1>this is login</h1>
      <button>Logout</button>
      <button onClick={onLogin}>Google</button>
      <button onClick={onLogin}>Github</button>
      <Footer />
    </div>
  );
};
export default Login;
