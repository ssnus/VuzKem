import classes from "./VuzCard.module.css";
import kuzgtu from "../../pic/VuzCardImg/kuzgtu.webp";
import kemgu from "../../pic/VuzCardImg/kemgu.webp";
import photoStubVuz from "../../pic/VuzCardImg/photoStubVuz.webp";
import { PropTypes } from "prop-types";

export default function VuzCard({ isMobile, nameVuz, aboutVuz, countNaprav, idPicture }) {
  
  let imgVuz;

  switch (idPicture) {
    case "1":
      imgVuz = kuzgtu
      break;
    
    case "2":
      imgVuz = kemgu
      break;
  
    default:
      imgVuz = photoStubVuz
      break;
  }
  
  return (
    <>
      {!isMobile ? (
        <div className={classes.card}>
          <span className={classes.line}></span>
          <div className={classes.block}>
            <div className={classes.leftBlock}>
              <img
                className={classes.imgVuz}
                src={imgVuz}
                alt="Изображение вуза"
              />
              <div className={classes.infoBlock}>
                <h3 className={classes.tittleCard}>{nameVuz}</h3>
                <p className={classes.textCard}>{aboutVuz}</p>
              </div>
              <span className={classes.verticalLine}></span>
            </div>
            <div className={classes.rightBlock}>
              <h4 className={classes.rightBlockH4}>
                <span className={classes.rightBlockSpan}>Более</span>
                <br />
                {countNaprav} направлений
              </h4>
            </div>
          </div>
          <span className={classes.line}></span>
        </div>
      ) : (
        <div className={classes.cardMobile}>
          <img
            className={classes.imgVuzMobile}
            src={imgVuz}
            alt="Изображение вуза"
          />
          <div className={classes.infoBlockMobile}>
            <h3 className={classes.tittleCardMobile}>{nameVuz}</h3>
          </div>
        </div>
      )}
    </>
  );
}

VuzCard.propTypes = {
  isMobile: PropTypes.bool,
  nameVuz:PropTypes.string,
  aboutVuz:PropTypes.string,
  countNaprav:PropTypes.string,
  idPicture:PropTypes.number,
};
