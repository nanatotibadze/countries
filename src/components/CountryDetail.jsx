import classes from "./CountryDetail.module.css";
import {Link, useNavigate} from "react-router-dom";
import CountryItem from "./CountryItem";

import {useOutletContext} from "react-router-dom";

function CountryDetail({country, all}) {
  const name = country.name.nativeName
    ? Object.values(country.name.nativeName)
    : null;

  const currencies = country.currencies
    ? Object.values(country.currencies)
    : null;

  const languages = country.languages ? Object.values(country.languages) : null;
  const navigate = useNavigate();
  const {darkMode} = useOutletContext();

  function countryIndicator(code) {
    const indicator = all.filter((item) => item.cca3 === code);

    return indicator[0].name.common;
  }

  if (country.name.common === "Georgia")
    country = {
      region: "Europe",
      flags: country.flags,
      subregion: "Eastern Europe",
      languages: country.languages,
      currencies: country.currencies,
      population: country.population,
      capital: country.capital,
      tld: country.tld,
      borders: country.borders,
      name: country.name,
    };

  return (
    <>
      <Link to={-1}>
        <button
          className={`${classes.detailBtn}  ${
            darkMode ? classes.dark : classes.light
          }`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z'
              fill='#111517'
            />
          </svg>
          Back
        </button>
      </Link>

      <div className={classes.container}>
        <div className={classes.flagDiv}>
          {" "}
          <img src={country.flags.png} />
        </div>
        <div className={classes.details}>
          <h2>{country.name.common}</h2>
          <div className={classes.description}>
            <div>
              {name ? (
                <p>
                  <span>Native name:</span> {name[0].official}
                </p>
              ) : (
                ""
              )}

              {country.population ? (
                <p>
                  <span>population: </span>
                  {country.population}
                </p>
              ) : (
                ""
              )}
              <p>
                {" "}
                <span>region: </span>
                {country.region}
              </p>
              {country.subregion ? (
                <p>
                  {" "}
                  <span>sub region: </span>
                  {country.subregion}
                </p>
              ) : (
                ""
              )}

              {country.capital ? (
                <p>
                  <span>capital: </span>
                  {country.capital}
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              {country.tld ? (
                <p>
                  {" "}
                  <span>Top Level domain: </span>
                  {country.tld.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </p>
              ) : (
                ""
              )}
              {currencies ? (
                <p>
                  {" "}
                  <span>Currencies: </span>
                  {currencies.map((item) => `${item.name} ${item.symbol}`)}
                </p>
              ) : (
                ""
              )}
              {languages ? (
                <p>
                  <span>languages:</span>{" "}
                  {languages.map((item) => (
                    <span key={item}> {item}</span>
                  ))}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className={classes.borders}>
            <h3>Border Countries:</h3>
            {country.borders ? (
              country.borders.map((item) => (
                <button
                  key={item.name}
                  className={`${classes.borderBtn} ${
                    darkMode ? classes.dark : classes.light
                  }`}
                  value={item}
                  onClick={(e) => navigate(`/alpha/${e.target.value}`)}
                >
                  {countryIndicator(item)}
                </button>
              ))
            ) : (
              <button className={classes.borderBtn}>none</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryDetail;

// // eslint-disable-next-line react-refresh/only-export-components
