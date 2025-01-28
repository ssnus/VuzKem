import classes from "./VuzPage.module.css";
import VuzCard from "./VuzCard/VuzCard";
import FilterRow from "../FilterRow/FilterRow";
import { useState, useEffect } from "react";
export default function VuzPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [vuzList, setData] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <>
      <FilterRow/>
      <section
        className={!isMobile ? classes.gridBlock : classes.gridBlockMobile}
      >
        {vuzList.map((vuz) => (
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
