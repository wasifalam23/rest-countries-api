import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.heading}>Where in the world?</h1>
      {/* <span className="dark-mode">Dark mode</span> */}
    </div>
  );
};

export default Header;
