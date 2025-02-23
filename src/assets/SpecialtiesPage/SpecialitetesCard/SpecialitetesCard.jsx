import classes from "./SpecialitetesCard.module.css";
import kemsu from "../../pic/1.png";
import Pie from "../Pie/Pie.tsx";
import { PropTypes } from "prop-types";
import useCalculateTotalMinScore from "../hook/useCalculateTotalMinScore.jsx";
export default function SpecialitetesCard({
  name,
  idVuz,
  description,
  numberBudget,
  numberPaid,
  item1,
  item2,
  item3,
  subjects
}) {

  let iconCard = ''

  switch (idVuz) {
    case "2":
      iconCard=kemsu
      break;

    default:
      iconCard
      break;
  }

  const totalMinValue = useCalculateTotalMinScore(item1, item2, item3, subjects);

  return (
    <>
      <div className={classes.card}>
        <div className={classes.TopBlock}>
          <div className={classes.name}>
            <div className={classes.spanCenter}></div>
            <img src={iconCard} alt="iconVuz" className={classes.iconVuz} />
            <span className={classes.leftSpan}></span>
            {name}
          </div>
          <div className={classes.description}>
            <span className={classes.leftSpan}></span>
            {description}
          </div>
        </div>
        <div className={classes.diagrama}>
          <div className={classes.points}>
            <div className={classes.budget}>
              <p className={classes.pointP}>{`>${totalMinValue}`} баллов</p>
              <div className={classes.hkalaDiv}>
                <span
                  style={{ width: `${totalMinValue/4}%` }}
                  className={classes.inHkalaDiv}
                ></span>
              </div>
              <p className={classes.tip}>бюджет</p>
            </div>
            <div className={classes.platno}>
              <p className={classes.pointP}>{`<${numberPaid}`} мест</p>
              <div className={classes.hkalaDiv}>
                <span
                  style={{ width: `${numberPaid}%` }}
                  className={classes.inHkalaDiv}
                ></span>
              </div>
              <p className={classes.tip}>платно</p>
            </div>
          </div>
          <Pie place={numberBudget} placePaid={numberPaid} />
        </div>
      </div>
    </>
  );
}

SpecialitetesCard.propTypes = {
  isMobile: PropTypes.bool,
  name:PropTypes.string,
  idVuz:PropTypes.number,
  description:PropTypes.string,
  numberBudget:PropTypes.number,
  numberPaid:PropTypes.number,
  item1:PropTypes.string,
  item2:PropTypes.string,
  item3:PropTypes.string,
  subjects:PropTypes.Array
};
