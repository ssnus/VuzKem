import LinkComponent from "../Link/Link";
import Button from "../Button/Button";
import classes from "./Burger.module.css";
import { PropTypes } from "prop-types";
export default function Burger({ onClick, ClickBurger, BurgerClick }) {
  return (
    <>
      <div className={classes.burger} onClick={onClick}>
        <div
          className={
            ClickBurger ? `${classes.top} ${classes.topActive}` : classes.top
          }
        ></div>
        <div
          className={
            ClickBurger
              ? `${classes.middle} ${classes.middleActive}`
              : classes.middle
          }
        ></div>
        <div
          className={
            ClickBurger
              ? `${classes.bottom} ${classes.bottomActive}`
              : classes.bottom
          }
        ></div>
      </div>
      <div
        className={
          ClickBurger
            ? `${classes.burgerNav} ${classes.burgerNavActive}`
            : classes.burgerNav
        }
      >
        <Button
          decorateType="account"
          onClick={() => {
            console.log("присоединиться");
          }}
        >
          Присоединиться
        </Button>
        <LinkComponent handleClick={BurgerClick} to="/vuz">
          Вузы
        </LinkComponent>
        <LinkComponent handleClick={BurgerClick} to="/specialties">
          Специальности
        </LinkComponent>
        <LinkComponent handleClick={BurgerClick}>Программы</LinkComponent>
        <LinkComponent handleClick={BurgerClick}>О нас</LinkComponent>
      </div>
    </>
  );
}

Burger.propTypes = {
  onClick: PropTypes.func.isRequired,
  ClickBurger: PropTypes.bool.isRequired,
  BurgerClick: PropTypes.func.isRequired,
};
