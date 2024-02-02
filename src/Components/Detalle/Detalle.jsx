import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Detalle.css'

const Detalle = () => {
  const [personaje, setPersonaje] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getCharacters = async () => {
      const res = await fetch(`http://localhost:3000/characters/${id}`);
      console.log(res)
      const resJson = await res.json();
      setPersonaje(resJson);
      console.log(resJson)
    };

    getCharacters();
  }, [id]);

  return (
    <div className="div"> 
      <div className="personaje">
        <img src={personaje.image} alt={personaje.name} />
        <h3>{personaje.name}</h3>
      </div>
      <div className="info">
        <div className="info2">
          <h2>CASA</h2>
          <p className="casaclass"> {personaje.house}</p>
        </div>
        <div className="info2">
          <h2>ALIANZAS</h2>
          <ul>
            {personaje.alliances?.map((item, index) => (
              <div key={index}>
                <li>{item}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="info2">
          <h2>APARICIONES</h2>
          <ul>
            {personaje.episodes?.map((item, index) => (
              <div key={index}>
                <li>{item}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="info2">
          <h2>FAMILIARES</h2>
          <ul>
            {personaje.simblings?.map((item, index) => (
              <div key={index}>
                <li>{item}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="info2">
          <h2>TITULOS</h2>
          <ul>
            {personaje.titles?.map((item, index) => (
              <div key={index}>
                <li>{item}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="info2">
          <h2>PADRES</h2>
          <ul>
            {personaje.parents?.map((item, index) => (
              <div key={index}>
                <li>{item}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
