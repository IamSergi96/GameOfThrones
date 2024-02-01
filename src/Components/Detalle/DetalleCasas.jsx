import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetalleCasas = () => {
  const [casa, setCasa] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCasas = async () => {
      const casaApi = await fetch(
        `https://game-of-thrones-json-server.vercel.app/houses/${id}`
      );
      const casaJson = await casaApi.json();
      setCasa(casaJson[0]);
    };

    getCasas();
  }, [id]);

  if (!casa) {
  return null;
  } 

  return;
  <div>
    <h3>{casa.name} </h3>
    <img src={casa.image} alt="" />
    <span>Settlement:{casa.settlement} </span>
    <span>Región:{casa.region} </span>

    <div>
      <ul>
        Alianzas:
        {casa.alliances.map((alianza, index) => (
          <li key={index}>{alianza}</li>
        ))}
      </ul>
    </div>

    <div>
      <ul>
        Religiones:
        {casa.religions.map((religion, index) => (
          <li key={index}>{religion}</li>
        ))}
      </ul>
    </div>

    <span>{casa.foundation} </span>
  </div>;
};

export default DetalleCasas;