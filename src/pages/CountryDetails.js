import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import CountryError from '../components/CountryError';
import LoadingSpinner from '../components/LoadingSpinner';
import { IoArrowBack } from 'react-icons/io5';

import styles from './CountryDetails.module.css';

const CountryDetails = () => {
  const [country, setCountry] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const message = 'Please check your internet connection or try again later.';

  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  const params = useParams();
  const countryCode = params.id;

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const countryData = await fetch(
          `https://restcountries.com/v2/alpha/${countryCode}`
        );
        const data = await countryData.json();
        setCountry(data);
        setErrorMessage(false);
        setLoadingSpinner(true);
      } catch (err) {
        console.log(err);
        setErrorMessage(true);
      }
    };
    getCountryByName();
  }, [countryCode]);

  return (
    <div className={styles['details-container']}>
      {errorMessage && <CountryError message={message} />}
      <div className={styles['details-box']}>
        <div className={styles['btn-box']}>
          <Link to="/countries">
            <IoArrowBack className={styles['icon-arrow']} />
            <button className={styles['back-btn']}>Back</button>
          </Link>
        </div>
        <div className={styles['country-box']}>
          <img className={styles['country-img']} src={flag} alt="" />

          <div className={styles['info-box']}>
            <h1 className={styles['country-name']}> {name} </h1>
            <div className={styles['col-box']}>
              <div className={styles['col--1']}>
                <p className={styles['info-text']}>
                  Native Name:
                  <span>{nativeName}</span>
                </p>

                <p className={styles['info-text']}>
                  Population:
                  <span>{population}</span>
                </p>

                <p className={styles['info-text']}>
                  Region:
                  <span>{region}</span>
                </p>

                <p className={styles['info-text']}>
                  Sub Region:
                  <span>{subregion}</span>
                </p>

                <p className={styles['info-text']}>
                  Capital:
                  <span>{capital}</span>
                </p>
              </div>
              <div className={styles['col--2']}>
                <p className={styles['info-text']}>
                  Top Level Domain:
                  <span>{topLevelDomain}</span>
                </p>

                <p className={styles['info-text']}>
                  Currencies:
                  <span>{currencies && currencies[0].name}</span>
                </p>

                <p className={styles['info-text']}>
                  Languages:
                  {languages && (
                    <span>
                      {languages
                        .map((language) => `${language.name}`)
                        .join(', ')}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className={styles['border-box']}>
              <p className={styles['border-text']}>
                Borders:
                {borders ? (
                  borders
                    .slice(0, 3)
                    .map((border) => <span key={border}>{border}</span>)
                ) : (
                  <span className={styles['span-no']}> No Border </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      {!loadingSpinner && <LoadingSpinner />}
    </div>
  );
};

export default CountryDetails;
