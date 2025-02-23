import LinkComponent from "../Link/Link";
import Button from "../Button/Button";
import classes from "./Header.module.css";
import Burger from "../Burger/Burger";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Header() {
  const [isClickBurger, setIsClickBurger] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1240) {
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
  return (
    <>
      {!isMobile ? (
        <header
          className={
            location.pathname === "/"
              ? `${classes.header} ${classes.colorOne}`
              : `${classes.header} ${classes.colorTwo}`
          }
        >
          <div className={classes.nav}>
            <LinkComponent to="/vuz">Вузы</LinkComponent>
            <LinkComponent to="/specialties">Специальности</LinkComponent>
          </div>
          <NavLink to="/" className={classes.logo}>
            <h2>VUZKEM</h2>
          </NavLink>

          <div className={classes.nav}>
            <LinkComponent>О Нас</LinkComponent>
            <LinkComponent>Авторизация</LinkComponent>
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
            location.pathname === "/"
              ? `${classes.mobileHeader} ${classes.colorOne}`
              : `${classes.mobileHeader} ${classes.colorTwo}`
          }
        >
          <NavLink to="/" className={classes.logo}>
            <h2>VUZKEM</h2>
          </NavLink>
            <Burger
              BurgerClick={()=> setIsClickBurger(false)}

              onClick={() => {
                setIsClickBurger(!isClickBurger);
              }}
              ClickBurger={isClickBurger}
            />
        </header>
      )}
    </>
  );
}
