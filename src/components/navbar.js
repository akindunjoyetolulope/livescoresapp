import classes from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      {props.location ? (
        <div>
          <Link to="/" className={classes.navbartext}>
            {" "}
            All Competitions{" "}
          </Link>{" "}
          / <span>{props.display}</span>
        </div>
      ) : (
        <div>All Competitions</div>
      )}
    </div>
  );
};

export default Navbar;
