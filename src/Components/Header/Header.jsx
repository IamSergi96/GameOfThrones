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
          <img src="/assets/spanish.png" alt="español logo" onClick={()=>changeLanguage("es")} />
          <img src="/assets/english.png" alt="english logo" onClick={()=>changeLanguage("en")} />
        </ul>
    );
  };
  export default Header;