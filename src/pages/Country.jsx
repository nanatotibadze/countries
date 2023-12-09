import classes from "./Home.module.css";
import Search from "../components/Search";
import Countries from "../components/Countries";
import {useLoaderData} from "react-router-dom";

import {getCountries} from "../services/apiCountries";
import {useOutletContext} from "react-router-dom";

function Country() {
  const country = useLoaderData();
  const {query} = useOutletContext();

  const searchResult = country.filter((item) =>
    item.name.common.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className={classes.home}>
      <Search />
      <Countries countries={searchResult} />
    </section>
  );
}

export default Country;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const data = await getCountries();

  return data;
}
