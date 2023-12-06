/* eslint-disable react-refresh/only-export-components */
import CountryItem from "./CountryItem";
import classes from "./Countries.module.css";

function Countries({countries}) {
  const strAscending = [...countries].sort((a, b) =>
    a.name.common > b.name.common ? 1 : -1
  );

  return (
    <div className={classes.countries}>
      {strAscending.map((item) => (
        <CountryItem
          name={item.name.common}
          key={item.name.common}
          population={item.population}
          region={item.region}
          capital={item.capital}
          flags={item.flags}
          cca3={item.cca3}
        />
      ))}
    </div>
  );
}

export default Countries;
