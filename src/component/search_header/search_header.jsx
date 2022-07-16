import React, { useRef, memo } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <button className={styles.title}>STC</button>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type='search'
        placeholder='Search for video'
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type='submit' onClick={onClick}>
        <img
          className={styles.buttonimg}
          src='/images/research1.png'
          alt='search'
        />
      </button>
    </header>
  );
});
export default SearchHeader;
