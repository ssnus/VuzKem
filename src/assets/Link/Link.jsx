import classes from './Link.module.css'
import { PropTypes } from "prop-types";
export default function Link({ children, handleClick, value, isActive }) {
  return (
    <>
      <div className={classes.blockLink}>
        <a className={classes.link} onClick={()=>handleClick(value)}>{children}</a>
        {isActive === value ? (<span className={classes.span}></span>) : null}
      </div>
    </>
  );
}

Link.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isActive: PropTypes.string,
}