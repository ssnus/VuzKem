import LinkComponent from "../Link/Link";
import classes from "./Footer.module.css";
import vkIcon from "../pic/Footer/vk.png";
import telegramIcon from "../pic/Footer/telegram.png";
import gmailIcon from "../pic/Footer/email.png";

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
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

  return (
    <>
      <section className={isMobile ? classes.footerMobile : classes.footer}>
        <div className={isMobile ? classes.navMobile : classes.nav}>
          <div className={classes.columnNav}>
            <h3 className={classes.columnNavH3}>Работа с сайтом</h3>
            <LinkComponent to="/vuz">Вузы</LinkComponent>
            <LinkComponent to="/specialties">Специальности</LinkComponent>
            <LinkComponent>Авторизация</LinkComponent>
          </div>

          <div className={classes.columnNav}>
            <h3 className={classes.columnNavH3}>Компания</h3>
            <LinkComponent>О нас</LinkComponent>
            <LinkComponent>Связаться с нами</LinkComponent>
          </div>

          <div className={classes.columnNav}>
            <h3 className={classes.columnNavH3}>Информация</h3>
            <LinkComponent>FAQ</LinkComponent>
            <LinkComponent>Поддержать нас</LinkComponent>
          </div>
        </div>
        <span className={classes.footerSpan}></span>
        <div className={classes.footerBottom}>
          <NavLink to="/" className={classes.logo}>
            <h2>VUZKEM</h2>
          </NavLink>
          <div className={classes.socialNetwork}>
            <img src={vkIcon} alt="vk" />
            <img src={telegramIcon} alt="vk" />
            <img src={gmailIcon} alt="vk" />
          </div>
        </div>
      </section>
    </>
  );
}
