import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetalleCasas.css";

const DetalleCasas = () => {
  const [casa, setCasa] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCasas = async () => {
      const casaApi = await fetch(

        `http://localhost:3000/houses/${id}`

      );
      const casaJson = await casaApi.json();
      setCasa(casaJson);
      console.log(casaJson);
    };

    getCasas();
  }, [id]);

  if (!casa) {
    return <div>Cargando...</div>;
  }

  return (
  <div className="detalleCasas">
  <div className="imgYnom2">
    <img src={casa.image} alt="" />
    <h2>{casa.name} </h2>
    </div>
    <div className="horizontal">
    <div className="group">
    <h3>Asentamiento</h3>
    <p>{casa.settlement}</p> 
    </div>
    <div className="group">
    <h3>Región </h3>
    <p>{casa.region} </p>
    </div>

    <div className="group">
    <h3>Alianzas</h3> 
      <ul className="alianzas">
         {casa.alliances?.map((alianza, index) => (
          <li key={index}>{alianza}</li>
        ))}
      </ul>
      </div>

    
    <div className="group">
   <h3>Religiones</h3> 
      <ul className="religiones">
        {casa.religions?.map((religion, index) => (
          <li key={index}>{religion}</li>
        ))}
      </ul>
      </div>
    
    <div className="group">
    <h3>Fundación</h3>
    <p>{casa.foundation}</p>
    </div>
    </div>
  </div>
  )
};

export default DetalleCasas;