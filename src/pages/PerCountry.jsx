import {getCountries, getByCode} from "../services/apiCountries";
import classes from "../components/CountryDetail.module.css";
import CountryDetail from "../components/CountryDetail";
import {useLoaderData} from "react-router-dom";

function PerCountry({darkMode}) {
  const [countries, all] = useLoaderData();

  return (
    <section
      className={`${classes.detailContainer} ${darkMode ? classes.dark : ""}`}
    >
      {countries.map((country) => (
        <CountryDetail country={country} key={country.name.common} all={all} />
      ))}
    </section>
  );
}

export default PerCountry;
// eslint-disable-next-line react-refresh/only-export-components
export async function loader({params}) {
  const data = await getByCode(params.col);
  const countries = await getCountries();

  return [data, countries];
}
