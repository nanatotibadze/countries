import {Link, useNavigate} from "react-router-dom";
import classes from "./Error.module.css";

function LinkButton({children, to}) {
  const navigate = useNavigate();

  if (to === "-1")
    return (
      <button className={classes.errorBtn} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return <Link to={to}>{children}</Link>;
}

export default LinkButton;
