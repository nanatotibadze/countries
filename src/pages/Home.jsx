import classes from "./Home.module.css";
import Search from "../components/Search";
import Countries from "../components/Countries";
import {useLoaderData} from "react-router-dom";
import {getCountries} from "../services/apiCountries";

function Home() {
  const countries = useLoaderData();
  return (
    <section className={classes.home}>
      <Search />
      <Countries countries={countries} />
    </section>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set

  const data = await getCountries();

  return data;
}
export default Home;
