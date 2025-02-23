import man from "../pic/HomePage/man.jpg";
import airplane from "../pic/HomePage/airplane.png";
import lamp from "../pic/HomePage/lamp.png";
import spring from "../pic/HomePage/spring.png";
import award from "../pic/HomePage/Card/award.png";
import map from "../pic/HomePage/Card/map.png";
import headphones from "../pic/HomePage/Card/headphones.png";
import waveLine from "../pic/HomePage/waveLine.png";
import mapStudent from "../pic/HomePage/mapStudent.png";
import mapStudentMobile from "../pic/HomePage/mapStudentMobile.png";

import { NavLink } from "react-router-dom";
import classes from "./HomePage.module.css";
import Button from "../Button/Button";
import Card from "./Card/Card";
import { useState, useEffect } from "react";
export default function HomePage() {
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
      {!isMobile ? (
        <>
          <main className={classes.main}>
            <img className={classes.manImg} src={man} />
            <section className={classes.mainText}>
              <span className={`${classes.spanMainText} ${classes.firstSpan}`}>
                <img className={classes.airplaneImg} src={airplane} />
                <h2>1k+ студентов</h2>
              </span>
              <h1>
                Освободи свой
                <span
                  className={`${classes.spanMainText} ${classes.secondSpan}`}
                >
                  потенциал!
                </span>
                Найди идеальный вуз для себя.
              </h1>
              <p className={classes.firstP}>
                На нашем сайте ты найдёшь полную информацию о лучших вузах и
                сможешь выбрать тот, который соответствует твоим целям и
                интересам. Мы поможем тебе сделать первый шаг к успешной
                карьере!
              </p>
              <NavLink to="/vuz">
                <Button decorateType="orange">Найти вуз</Button>
              </NavLink>
            </section>
          </main>
          <section className={classes.secondInfoBlock}>
            <img className={classes.springImg} src={spring} />
            <section className={classes.specPredlogBlock}>
              <img className={classes.lampImg} src={lamp} />
              <h1>Специальное будущее только для тебя</h1>
              <section className={classes.specPredlogBlockDop}>
                <p>
                  Найдите свой идеальный вуз с нами и откройте двери к успешной
                  карьере, используя нашу обширную базу данных и индивидуальный
                  подход к каждому студенту.
                </p>
                <NavLink to="/vuz" className={classes.logo}>
                  <Button decorateType="account">Смотреть все вузы</Button>
                </NavLink>
              </section>
            </section>
            <section className={classes.cardInfo}>
              <Card
                mobileCard={isMobile}
                img={award}
                title="Помогаем пользователям"
                text="в достижении их образовательных целей, предоставляем им полную и достоверную информацию для принятия обоснованных решений."
              />
              <Card
                mobileCard={isMobile}
                img={map}
                title="Собираем и обновляем"
                text="данные о различных университетах, включая учебные программы, стоимость обучения, местоположение и другие важные детали."
              />
              <Card
                mobileCard={isMobile}
                img={headphones}
                title="Разрабатываем интуитивно"
                text="понятный интерфейс и функционал, которые позволят пользователям легко ориентироваться на сайте и находить нужную информацию."
              />
            </section>
          </section>
          <section className={classes.thirdSection}>
            <div className={classes.textContaner}>
              <h1>
                Присоединяйся к самому большому{" "}
                <span>
                  сообществу
                  <img className={classes.waveLineImg} src={waveLine} />
                </span>{" "}
                по поиску университетов
              </h1>
            </div>
            <section className={classes.mapBlock}>
              <img className={classes.mapStudent} src={mapStudent} />
              <Button
                decorateType="account"
                onClick={() => {
                  console.log("Авторизоваться");
                }}
              >
                Авторизоваться
              </Button>
            </section>
          </section>
        </>
      ) : (
        <>
          <main className={classes.main}>
            <section className={classes.mainTextMobile}>
              <h1>
                Освободи свой
                <span
                  className={`${classes.spanMainTextMobile} ${classes.secondSpanMobile}`}
                >
                  потенциал!
                  <span
                    className={`${classes.spanMainTextMobile} ${classes.firstSpanMobile}`}
                  >
                    <h2>1k+ студентов</h2>
                  </span>
                </span>
                Найди идеальный вуз для себя.
              </h1>
              <p className={classes.firstPMobile}>
                На нашем сайте ты найдёшь полную информацию о лучших вузах и
                сможешь выбрать тот, который соответствует твоим целям и
                интересам. Мы поможем тебе сделать первый шаг к успешной
                карьере!
              </p>
              <NavLink to="/vuz" className={classes.logo}>
                <Button decorateType="orange" isMobile={isMobile}>
                  Найти вуз
                </Button>
              </NavLink>
            </section>
            <img className={classes.manImgMobile} src={man} />
          </main>
          <section className={classes.secondInfoBlockMobile}>
            <section className={classes.specPredlogBlockMobile}>
              <img className={classes.lampImgMobile} src={lamp} />
              <h1>Специальное будущее только для тебя</h1>
              <NavLink to="/vuz" className={classes.logo}>
                <Button decorateType="account">Смотреть все вузы</Button>
              </NavLink>
            </section>
            <section className={classes.cardInfoMobile}>
              <Card
                isPhone={isMobile}
                img={award}
                title="Помогаем пользователям"
                text="в достижении их образовательных целей, предоставляем им полную и достоверную информацию для принятия обоснованных решений."
              />
              <Card
                isPhone={isMobile}
                img={map}
                title="Собираем и обновляем"
                text="данные о различных университетах, включая учебные программы, стоимость обучения, местоположение и другие важные детали."
              />
              <Card
                isPhone={isMobile}
                img={headphones}
                title="Разрабатываем интуитивно"
                text="понятный интерфейс и функционал, которые позволят пользователям легко ориентироваться на сайте и находить нужную информацию."
              />
            </section>
          </section>
          <section className={classes.thirdSectionMobile}>
            <div className={classes.textContanerMobile}>
              <h1>
                Присоединяйся к самому большому{" "}
                <span>
                  сообществу
                  <img className={classes.waveLineImgMobile} src={waveLine} />
                </span>{" "}
                по поиску университетов
              </h1>
            </div>
            <section className={classes.mapBlockMobile}>
              <img
                className={classes.mapStudentMobile}
                src={mapStudentMobile}
              />
              <Button
                decorateType="account"
                onClick={() => {
                  console.log("Авторизоваться");
                }}
              >
                Авторизоваться
              </Button>
            </section>
          </section>
        </>
      )}
    </>
  );
}
