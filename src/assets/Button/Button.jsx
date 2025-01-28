import { PropTypes } from "prop-types";
import classes from "./Button.module.css";
export default function Button({ onClick, children, decorateType, isMobile }) {
  return (
    <>
      {
        decorateType === "account" ? 
          <div className={classes.container} onClick={onClick}>
            <button className={classes.btnAccount}>{children}</button>
            <div className={classes.orange}></div>
            <div className={classes.brown}></div>
          </div>
         : 
          <button className={!isMobile ? (`${classes.btn}`) : (`${classes.btn} ${classes.mobile}`)} onClick={onClick}>{children}</button>
      }
    </>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  decorateType: PropTypes.func.isRequired,
  isMobile : PropTypes.boolean
};
