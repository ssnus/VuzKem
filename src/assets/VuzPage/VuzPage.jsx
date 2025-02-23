import classes from "./VuzPage.module.css";
import VuzCard from "./VuzCard/VuzCard";
import FilterRow from "../FilterRow/FilterRow";
import { useState, useEffect } from "react";
export default function VuzPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [vuzList, setData] = useState([]);
  const [error, setError] = useState(null);
  const[value, setValue] = useState("")

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
  }, []);

  useEffect(() => {
    fetch('http://kirillwor3.temp.swtest.ru/server/vuz.php') 
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => setError(error));
}, []);

{error ? "Ошибка загрузки данных" : null}

  const handleChange = (event) => {
    setValue(event.target.value); // Обновляем состояние
  };

  const filteredVuzList = vuzList.filter(vuz =>
    vuz.name.toLowerCase().includes(value.toLowerCase())
);

  return (
    <>
      <FilterRow isVuz={true} inputChange={handleChange}/>
      <section
        className={!isMobile ? classes.gridBlock : classes.gridBlockMobile}
      >
        {filteredVuzList.map((vuz) => (
          <VuzCard
            key={vuz.id}
            nameVuz={vuz.name}
            aboutVuz={vuz.description}
            countNaprav={vuz.count_rows}
            isMobile={isMobile}
            idPicture = {vuz.image_id}
          />
        ))}
      </section>
    </>
  );
}
