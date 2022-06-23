import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToFoyer(data.user.uid));
  };

  const goToFoyer = (userId) => {
    navigate(`/foyer`, { replace: true, state: { id: userId } });
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
