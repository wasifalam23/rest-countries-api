import React from 'react';
import styles from './Country.module.css';

const Country = (props) => {
  return (
    <div className={styles.country}>
      <img src={props.imgSrc} alt="" className={styles.img} />

      <div className={styles.data}>
        <h3 className={styles.name}>{props.name}</h3>
        <p className={styles.paragraph}>
          Population:
          <span>{props.population}</span>
        </p>

        <p className={styles.paragraph}>
          Region:
          <span>{props.region}</span>
        </p>

        <p className={styles.paragraph}>
          Capital:
          <span>{props.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Country;
