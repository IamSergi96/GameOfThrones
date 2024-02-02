import React from "react";
import "./Header.css";
import i18n from "i18next";
import {useTranslation} from "react-i18next";

const Header = () => {
    const { t, i18n }= useTranslation(["translation"]);
    const changeLanguage = (code)=>{
     i18n.changeLanguage(code)
    };
  
    return (
        <ul Header="flags">
        
        <button className="band_btn"><img className="band_img" src="/assets/spanish.png" alt="Bandera españa" onClick={()=>changeLanguage("es")} /></button>
        <button className="band_btn"><img className="band_img" src="/assets/english.png" alt="Bandera inglesa" onClick={()=>changeLanguage("en")} /></button>
        </ul>
    );
  };
  export default Header;