import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => {
  return (
    <div className={styles.header}>
      <h1>this is header!</h1>
      <header className={styles.container}>
        {onLogout && (
          <button className={styles.logout} onClick={onLogout}>
            Logout
          </button>
        )}
      </header>
    </div>
  );
};
export default Header;
