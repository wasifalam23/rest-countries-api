import React from 'react';
import { Link } from 'react-router-dom';
import Country from './Country';
import styles from './CountryList.module.css';

const CountryList = (props) => {
  // console.log(props.countries);
  return (
    <div className={styles.countries}>
      {props.countries.map((country) => (
        <Link key={country.numericCode} to={`/${country.alpha3Code}`}>
          <Country
            imgSrc={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        </Link>
      ))}
    </div>
  );
};

export default CountryList;
