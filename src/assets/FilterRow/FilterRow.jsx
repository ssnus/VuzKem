import { useState, useEffect } from "react";
import classes from "./FilterRow.module.css";
import arrowDropDown from "../pic/Filter/arrowDropDown.png";
import searchIcon from "../pic/Filter/searchIcon.png";
import { PropTypes } from "prop-types";

export default function FilterRow({ isVuz, inputChange}) {
  const [isFirst, setIsFirst] = useState(true);
  const [isOpenLevel, setIsOpenLevel] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("Ур. Образования");
  const [subjectList, setData] = useState([]);
  const [error, setError] = useState(null);

  function clcikDropDown(text) {
    setValue(text);
    setIsOpenLevel(false);
  }

  useEffect(() => {
    fetch("http://kirillwor3.temp.swtest.ru/server/list_subjects.php")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => setError(error));
  }, []);

  /*if (error) {
    return <div>ошибка</div>;
  }*/

  return (
    <>
      {!isVuz ? (
        <div className={classes.row}>
          <div className={classes.toogle}>
            <div
              className={
                isFirst ? classes.activeToogle : classes.activeToogleActive
              }
            ></div>
            <h3
              onClick={() => setIsFirst(true)}
              className={
                isFirst ? classes.textToogleActive : classes.textToogle
              }
            >
              Очно
            </h3>
            <h3
              onClick={() => setIsFirst(false)}
              className={
                isFirst ? classes.textToogle : classes.textToogleActive
              }
            >
              Заочно
            </h3>
          </div>

          <div
            className={classes.MenuLevelEducaten}
            onMouseLeave={() => setIsOpenLevel(false)}
            onClick={() => setIsOpenLevel(!isOpenLevel)}
          >
            <button
              className={
                !isOpenLevel
                  ? classes.dropbtn
                  : `${classes.dropbtn} ${classes.dropbtnOpen}`
              }
              onMouseOver={() => setIsOpenLevel(true)}
            >
              {value}
            </button>
            <img
              src={arrowDropDown}
              alt="стрелка"
              className={
                !isOpenLevel ? classes.imgDropMenu : classes.imgDropMenuOpen
              }
            />
            <div
              className={
                !isOpenLevel
                  ? classes.dropdown_content
                  : `${classes.dropdown_content} ${classes.dropdown_contentOpen}`
              }
            >
              <div style={{ position: "relative" }}>
                <a onClick={() => clcikDropDown("Аспирантура")}>Аспирантура</a>
                <span className={classes.spanA}></span>
              </div>
              <div style={{ position: "relative" }}>
                <a onClick={() => clcikDropDown("Магистратура")}>
                  Магистратура
                </a>
                <span className={classes.spanA}></span>
              </div>
              <div style={{ position: "relative" }}>
                <a onClick={() => clcikDropDown("Специалитет")}>Специалитет</a>
                <span className={classes.spanA}></span>
              </div>
              <div style={{ position: "relative" }}>
                <a onClick={() => clcikDropDown("Ур. Образования")}>Все</a>
              </div>
            </div>
          </div>

          <div //Предметы
            className={classes.MenuLevelEducaten}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div onClick={() => setIsOpen(!isOpen)}>
              <button
                className={
                  !isOpen
                    ? classes.dropbtn
                    : `${classes.dropbtn} ${classes.dropbtnOpen}`
                }
                onMouseOver={() => setIsOpen(true)}
              >
                Предметы
              </button>
              <img
                src={arrowDropDown}
                alt="стрелка"
                className={
                  !isOpen ? classes.imgDropMenu : classes.imgDropMenuOpen
                }
              />
            </div>
            <div
              className={
                !isOpen
                  ? classes.dropdown_content
                  : `${classes.dropdown_content} ${classes.dropdown_contentOpen}`
              }
            >
              {subjectList.map((subject, index) => (
                <div
                  key={index}
                  className={classes.blockCheck}
                  style={{ position: "relative" }}
                >
                  <label htmlFor={index}>{subject.name}</label>
                  <input
                    className={classes.StyleCheck}
                    type="checkbox"
                    id={index}
                  />
                  <span className={classes.spanA}></span>
                </div>
              ))}
            </div>
          </div>

          <div className={classes.inputBlock}>
            <input
              type="text"
              className={classes.input}
              placeholder="Поиск по специальности"
            />
            <img src={searchIcon} className={classes.imgSearch} />
          </div>
        </div>
      ) : (
        <div className={classes.rowVuz}>
          <div className={classes.inputBlockVuz}>
            <input
              type="text"
              onChange={inputChange}
              className={classes.input}
              placeholder="Поиск ВУЗа"
            />
            <img src={searchIcon} className={classes.imgSearch} />
          </div>
        </div>
      )}
    </>
  );
}

FilterRow.propTypes = {
  isVuz: PropTypes.boolean,
  inputChange: PropTypes.func,
};
