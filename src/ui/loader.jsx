import {getCountries} from "../services/apiCountries";

export async function loader() {
  const countries = await getCountries();
  return countries;
}
