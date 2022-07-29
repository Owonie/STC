import React, { useRef, memo } from 'react';
import styles from './search_header.module.css';

type SearchHeaderProps = {
  onSearch: (value: string) => void;
};

const SearchHeader = memo(({ onSearch }: SearchHeaderProps) => {
  const inputRef = useRef<HTMLInputElement>();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <button className={styles.title}>Split-Then-Combine</button>
      </div>
      <div className={styles.search}>
        <input
          ref={inputRef}
          className={styles.input}
          type='search'
          placeholder='검색어를 입력해주세요!'
          onKeyPress={onKeyPress}
        />
        <button className={styles.button} type='submit' onClick={onClick}>
          <img
            className={styles.buttonimg}
            src='/images/research1.png'
            alt='search'
          />
        </button>
      </div>
    </header>
  );
});
export default SearchHeader;
