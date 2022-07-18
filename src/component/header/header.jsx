import React from 'react';
import Login from '../login/login';
import styles from './header.module.css';

const Header = ({ onLogout, authService }) => {
  return (
    <div className={styles.header}>
      <h1>this is header!</h1>
    </div>
  );
};
export default Header;
