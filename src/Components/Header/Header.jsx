import React from "react";
import "./Header.css";
import {useTranslation} from "react-i18next";
import i18n from "../../i18n";


const Header = () => {
    const { i18n }= useTranslation();
    const changeLanguage = (lang)=>{
     i18n.changeLanguage(lang)
    };
  
    return (

      <ul className="flags">
      
      <button className="band_btn"><img className="band_img" src="/assets/spanish.png" alt="Bandera españa" onClick={()=>changeLanguage("es")} /></button>
      <button className="band_btn"><img className="band_img" src="/assets/english.png" alt="Bandera inglesa" onClick={()=>changeLanguage("en")} /></button>
      </ul>
  );

  };
  export default Header;