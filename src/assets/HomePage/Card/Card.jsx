import lineCard from "../../pic/HomePage/Card/lineCard.png";
import classes from "./Card.module.css";
import { PropTypes } from "prop-types";
export default function Card({ img, title, text, isPhone }) {
  return (
    <>
      <div className={isPhone ? classes.cardMobile : classes.card}>
        <img src={lineCard} className={classes.lineCard} />
        <img src={img} alt=""  className={isPhone ? classes.cardImgMobile : classes.cardImg}/>
        <h4>
          <span>{title}</span>
          <br />
          {text}
        </h4>
      </div>
    </>
  );
}
Card.propTypes = {
  img: PropTypes.img,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isPhone: PropTypes.string.isRequired,
};
