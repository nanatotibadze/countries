import classes from "./Search.module.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useOutletContext} from "react-router-dom";

function Search() {
  const {darkMode} = useOutletContext();
  const {query, setQuery} = useOutletContext();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.value !== "") navigate(`/region/${e.target.value}`);
    if (e.target.value === "") navigate(`/`);
  }

  function inputHandler(e) {
    e.preventDefault();
    setQuery(e.target.value);
    if (query) navigate("/name/country");
    if (!query) navigate("/");
  }

  return (
    <div className={classes.searchSection}>
      <div>
        <form onChange={inputHandler}>
          <label className={classes.inputLabel}> </label>{" "}
          <input
            placeholder='Search for a country…'
            defaultValue={query}
            className={`${classes.input} ${
              darkMode ? classes.dark : classes.light
            }`}
          ></input>
        </form>
      </div>
      <div className={classes.selectDiv}>
        <select
          name='countries'
          id='countries'
          onChange={handleSubmit}
          className={darkMode ? classes.dark : classes.light}
        >
          <option value={""}> All Regions</option>
          <option value={"africa"}>Africa</option>
          <option value={"america"}>America</option>
          <option value={"asia"}>Asia</option>
          <option value={"europe"}>Europe</option>
          <option value={"oceania"}>Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default Search;
