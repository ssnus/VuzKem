import { useState } from "react";
import classes from "./FilterRow.module.css";
import arrowDropDown from "../pic/Filter/arrowDropDown.png"
import searchIcon from "../pic/Filter/searchIcon.png"

export default function FilterRow () {
    const[isFirst , setIsFirst] = useState(true)
    const[isOpen, setIsOpen] = useState(false)
    const[value, setValue] = useState("Ур. Образования")

    function clcikDropDown(text) {
        setValue(text)
        setIsOpen(false)
    }

    return (
        <>
            <div className={classes.row}>
                <div className={classes.toogle}>
                    <div className={isFirst ? classes.activeToogle : classes.activeToogleActive}></div>
                    <h3 onClick={()=>setIsFirst(true)} className={isFirst ? classes.textToogleActive : classes.textToogle}>Очно</h3>
                    <h3 onClick={()=>setIsFirst(false)} className={isFirst ? classes.textToogle : classes.textToogleActive}>Заочно</h3>
                </div>

                <div className={classes.MenuLevelEducaten}
                onMouseLeave={()=>setIsOpen(false)}>
                    <button className={!isOpen ? classes.dropbtn : `${classes.dropbtn} ${classes.dropbtnOpen}`}
                    onMouseOver={()=>setIsOpen(true)}
                    >{value}</button>
                    <img src={arrowDropDown} alt="стрелка" className={!isOpen ? classes.imgDropMenu : classes.imgDropMenuOpen}/>
                    <div className={!isOpen ? classes.dropdown_content : `${classes.dropdown_content} ${classes.dropdown_contentOpen}`}>
                        <a onClick={()=>clcikDropDown("Аспирантура")}>Аспирантура</a>
                        <a onClick={()=>clcikDropDown("Магистратура")}>Магистратура</a>
                        <a onClick={()=>clcikDropDown("Специалитет")}>Специалитет</a>
                        <a onClick={()=>clcikDropDown("Ур. Образования")}>Все</a>
                    </div>
                </div>

                <div className={classes.inputBlock}>
                    <input type="text" 
                    className={classes.input} 
                    placeholder="Поиск по специальности"
                    />
                    <img src={searchIcon} className={classes.imgSearch}/>
                </div>
            </div>
        </>
    )
}