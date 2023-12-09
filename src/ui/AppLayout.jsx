import {Outlet} from "react-router-dom";
import Navigation from "./Navigation";
import classes from "./AppLayout.module.css";
import {useState} from "react";

function AppLayout() {
  const [darkMode, setDarkMode] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className={darkMode ? classes.dark : classes.main}>
        <Outlet context={{darkMode, query, setQuery}} />
      </main>
    </>
  );
}
export default AppLayout;
