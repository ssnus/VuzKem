import Link from "../Link/Link";
import Button from "../Button/Button";
import classes from "./Header.module.css";
import Burger from "../Burger/Burger";

import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
export default function Header({ linkClick, logoClick, valueColor, isActiveLink }) {
  const [isClickBurger, setIsClickBurger] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1205) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    // Вызов функции сразу после загрузки страницы
    handleResize();

    // Добавление обработчика события изменения размера окна
    window.addEventListener("resize", handleResize);

    // Удаление обработчика при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMobile]);

  const BurgerClick = (value) => {
    linkClick(value);
    setIsClickBurger(false);
  };
  return (
    <>
      {!isMobile ? (
        <header
          className={
            valueColor === "home"
              ? `${classes.header} ${classes.colorOne}`
              : `${classes.header} ${classes.colorTwo}`
          }
        >
          <div className={classes.nav}>
            <Link handleClick={linkClick} value="vuz" isActive={isActiveLink}>
              Вузы
            </Link>
            <Link value="свыс">Специальности</Link>
          </div>
          <h2 onClick={() => logoClick("home")} className={classes.logo}>
            VUZKEM
          </h2>
          <div className={classes.nav}>
            <Link>О Нас</Link>
            <Link>Авторизация</Link>
            <Button
              decorateType="account"
              onClick={() => {
                console.log("присоединиться");
              }}
            >
              Присоединиться
            </Button>
          </div>
        </header>
      ) : (
        <header
          className={
            valueColor === "home"
              ? `${classes.header} ${classes.mobileHeader} ${classes.colorOne}`
              : `${classes.header} ${classes.mobileHeader} ${classes.colorTwo}`
          }
        >
          <h2 onClick={() => logoClick("home")}>VUZKEM</h2>
          <div className={classes.burgerContainer}>
            <Burger
              onClick={() => {
                setIsClickBurger(!isClickBurger);
              }}
              ClickBurger={isClickBurger}
              BurgerClick={BurgerClick}
            />
          </div>
        </header>
      )}
    </>
  );
}

Header.propTypes = {
  linkClick: PropTypes.func.isRequired,
  logoClick: PropTypes.func.isRequired,
  valueColor: PropTypes.string.isRequired,
  isActiveLink: PropTypes.boolean,
};
