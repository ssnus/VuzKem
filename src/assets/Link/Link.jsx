import classes from "./Link.module.css";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useLocation } from "react-router-dom";
export default function LinkComponent({ children, to, handleClick }) {
  const location = useLocation();

  return (
    <>
      <div className={classes.blockLink}>
        <Link to={to} onClick={handleClick} className={classes.link}>
          {children}
        </Link>
        {location.pathname === to ? <span className={classes.span}></span> : null}
      </div>
    </>
  );
}

LinkComponent.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  handleClick: PropTypes.func,
};
