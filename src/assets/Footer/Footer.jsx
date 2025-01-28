import Link from "../Link/Link";
import classes from "./Footer.module.css";
import vkIcon from "../pic/Footer/vk.png";
import telegramIcon from "../pic/Footer/telegram.png";
import gmailIcon from "../pic/Footer/email.png";

import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
export default function Footer({ linkClick, logoClick }) {
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
            <Link handleClick={linkClick} value={"vuz"}>
              Вузы
            </Link>
            <Link>Специальности</Link>
            <Link>Программы</Link>
            <Link>Авторизация</Link>
          </div>

          <div className={classes.columnNav}>
            <h3 className={classes.columnNavH3}>Компания</h3>
            <Link>О нас</Link>
            <Link>Связаться с нами</Link>
          </div>

          <div className={classes.columnNav}>
            <h3 className={classes.columnNavH3}>Информация</h3>
            <Link>FAQ</Link>
            <Link>Поддержать нас</Link>
          </div>
        </div>
        <span className={classes.footerSpan}></span>
        <div className={classes.footerBottom}>
          <h2 onClick={() => logoClick("home")} className={classes.logo}>VUZKEM</h2>
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

Footer.propTypes = {
  linkClick: PropTypes.func.isRequired,
  logoClick: PropTypes.func.isRequired,
};
