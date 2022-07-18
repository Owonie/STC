import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  updateDisplayName,
  updateUserId,
  updatePhotoURL,
} from '../../reducers/userData';
import { toast } from 'react-toastify';

const Login = ({ authService, onLogout }) => {
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
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      toast.success('로그인 성공', { autoClose: 1000 });
      user && goToFoyer(user.uid);
    });
    navigate('/', {
      replace: true,
    });
  }, [authService]);

  return (
    <div id='login'>
      {onLogout && <button onClick={onLogout}>Logout</button>}
      <button onClick={onLogin}>Google</button>
      <button onClick={onLogin}>Github</button>
    </div>
  );
};
export default Login;
