import React from 'react';
import styles from './CountryError.module.css';

const CountryError = (props) => {
  return <p className={styles.text}>{props.message}</p>;
};

export default CountryError;
