import classes from "./Home.module.css";
import Search from "../components/Search";
import Countries from "../components/Countries";
import {useLoaderData} from "react-router-dom";
import {getCountry} from "../services/apiCountries";
import {getCountries} from "../services/apiCountries";

function Country() {
  const country = useLoaderData();

  return (
    <section className={classes.home}>
      <Search />
      <Countries countries={country} />
    </section>
  );
}

export default Country;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({params}) {
  const data = await getCountry(params.countryName);

  return data;
}
