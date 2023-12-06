import {useRouteError} from "react-router-dom";
import LinkButton from "./LinkButton";
import classes from "./Error.module.css";

function Error() {
  const error = useRouteError();

  return (
    <div className={classes.errorDiv}>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <LinkButton to='-1'>&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
