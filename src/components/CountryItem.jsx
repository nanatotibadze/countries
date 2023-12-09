import {Col} from "react-bootstrap";
import classes from "./Countries.module.css";
import {useNavigate} from "react-router-dom";

import {useOutletContext} from "react-router-dom";
function CountryItem({name, population, region, capital, flags, cca3}) {
  const navigate = useNavigate();
  const {darkMode} = useOutletContext();

  return (
    <Col
      lg={4}
      sm={12}
      className={`${classes.countryItem} ${
        darkMode ? classes.dark : classes.light
      }`}
      onClick={() => navigate(`/alpha/${cca3}`)}
    >
      <div>
        <img src={flags.png} className={classes.flag} alt={"country flag"}/>
      </div>
      <div className={classes.description}>
        <h4 className={darkMode ? classes.dark : classes.light}>{name}</h4>
        <p>
          <span>population:</span> {population}
        </p>
        <p>
          <span>region:</span> {region}
        </p>
        <p>
          <span>capital:</span> {capital}
        </p>
      </div>
    </Col>
  );
}

export default CountryItem;
