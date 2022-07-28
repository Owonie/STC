import React, { memo } from 'react';
import styles from './button.module.css';

type IProps = {
  name: string;
  onClick: (event: React.FormEvent) => void;
};

const Button: React.FC<IProps> = ({ name, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {name}
  </button>
);
export default React.memo(Button);
