import classes from "./Navigation.module.css";
import {useNavigate} from "react-router";

function Navigation({darkMode, setDarkMode}) {
  const navigate = useNavigate();
  return (
    <nav
      className={`${classes.navigation}  ${
        darkMode ? classes.dark : classes.lightMode
      }`}
    >
      <h2 className={classes.navHome} onClick={() => navigate("/")}>
        Where in the world?
      </h2>
      <div
        className={classes.darkMode}
        onClick={() => setDarkMode((mode) => !mode)}
      >
        {" "}
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='none'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M13.5532 13.815C9.66857 13.815 6.51929 10.9278 6.51929 7.36821C6.51929 6.0253 6.96679 4.78158 7.73143 3.75C4.69036 4.69515 2.5 7.33122 2.5 10.4381C2.5 14.3385 5.94929 17.5 10.2036 17.5C13.5929 17.5 16.4696 15.4932 17.5 12.7045C16.375 13.4048 15.0161 13.815 13.5532 13.815Z'
              fill='white'
              stroke='#111517'
              strokeWidth='1.25'
            />
          </svg>
        </span>
        <h3>Dark Mode</h3>
      </div>
    </nav>
  );
}

export default Navigation;
