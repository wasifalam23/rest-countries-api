import React, { useState, useEffect } from 'react';
import styles from './CountryInput.module.css';
import CountryList from '../components/CountryList';
import CountryMessage from '../components/CountryMessage';
import CountryError from '../components/CountryError';
import LoadingSpinner from '../components/LoadingSpinner';
import { IoSearch, IoChevronDown } from 'react-icons/io5';

const CountryInput = (props) => {
  const [countries, setCountries] = useState([]);
  const [countryName, setcountryName] = useState('');
  const [regionName, setRegionName] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const message = 'Please check your internet connection or try again later.';

  useEffect(() => {
    const getCountries = async () => {
      try {
        const countries = await fetch('https://restcountries.com/v2/all');
        const data = await countries.json();
        setCountries(data);
        setErrorMessage(false);
        setLoadingSpinner(true);
      } catch (err) {
        console.log(err);
        setErrorMessage(true);
      }
    };
    countryName === '' && regionName === '' && getCountries();

    const getCountriesByName = async () => {
      try {
        const countries = await fetch(
          `https://restcountries.com/v2/name/${countryName}`
        );
        const data = await countries.json();
        setCountries(data);
        setErrorMessage(false);
        setLoadingSpinner(true);
      } catch (err) {
        console.error(err.message);
        setErrorMessage(true);
      }
    };

    const getCountrisByRegion = async () => {
      try {
        const countries = await fetch(
          `https://restcountries.com/v2/continent/${regionName}`
        );
        const data = await countries.json();
        setCountries(data);
        setErrorMessage(false);
        setLoadingSpinner(true);
      } catch (err) {
        console.log(err);
        setErrorMessage(true);
      }
    };

    regionName !== '' && getCountrisByRegion();

    const identifier = setTimeout(() => {
      countryName !== '' && getCountriesByName();
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [countryName, regionName]);

  const inputChangeHandler = (e) => {
    setcountryName(e.target.value);
    setRegionName('');
  };

  const selectChangeHandler = (e) => {
    setRegionName(e.target.value);
    setcountryName('');
  };

  return (
    <div className={styles['countries-container']}>
      {errorMessage && <CountryError message={message} />}
      <div className={styles['input-container']}>
        <div className={styles['input-field']}>
          <IoSearch className={styles['search-icon']} />
          <input
            onChange={inputChangeHandler}
            value={countryName}
            type="text"
            placeholder="Search for a country..."
          />
        </div>
        <div className={styles['select-field']}>
          <IoChevronDown className={styles['arrow-icon']} />
          <select
            name="select-where"
            value={regionName}
            onChange={selectChangeHandler}
            label="Fiter by Region"
          >
            <option value="">Filter by Region </option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      {countries.length !== undefined ? (
        <CountryList countries={countries} />
      ) : (
        <CountryMessage />
      )}
      {!loadingSpinner && <LoadingSpinner />}
    </div>
  );
};

export default CountryInput;
