import classes from "./SpecialtiesPage.module.css";
import FilterRow from "../FilterRow/FilterRow";
import { useState, useEffect } from "react";
import SpecialitetesCard from "./SpecialitetesCard/SpecialitetesCard";
export default function SpecialtiesPage() {
  const [specialtiesList, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://kirillwor3.temp.swtest.ru/server/specialties.php")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => setError(error));
  }, []);

  {
    error ? "Ошибка загрузки данных" : null;
  }

  return (
    <>
      <FilterRow isVuz={false} /*inputChange={handleChange}*/ />
      <div className={classes.flexContainer}>
        <section className={classes.gridBlock}>
          {specialtiesList.map((specialtiet) => (
            <SpecialitetesCard
              key={specialtiet.id}
              name={specialtiet.name}
              idVuz={specialtiet.id_vuz}
              description={specialtiet.description}
              formEducation={specialtiet.form_education}
              levelEducation={specialtiet.level_education}
              numberBudget={specialtiet.number_budget}
              numberPaid={specialtiet.number_paid}
              item1={specialtiet.item1}
              item2={specialtiet.item2}
              item3={specialtiet.item3}
              subjects={specialtiet.subjects}
            />
          ))}
        </section>
      </div>
    </>
  );
}
