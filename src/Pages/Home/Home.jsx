import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  
  return (
    <div>
    
    <div className="container">
      <h1>{t("got")}</h1>
    </div>
    </div>
  );
}

export default Home;
