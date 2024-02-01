import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detalle = () => {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getCharacters = async () => {
      const characterApi = await fetch(`http://localhost:3000/character/${id}`);
      const characterJson = await characterApi.json();
      setCharacter(characterJson[0]);
    };
    getCharacters();
  }, [id]);
  return (
    <div className="div">
      <div className="personaje">
        <img src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
      </div>
      <div className="info">
        <div className="info2">
          <h2>{character.house}</h2>
        </div>
        <div className="info2">
          <h2>CASA</h2>
          <p> {character.house}</p>
        </div>
        <div className="info2">
          <h2>ALIANZAS</h2>
          <ul>
            {" "}
            {character.alliances.map((item, index) => (
              <div key={item}>
                <li>{item}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="info2">
          <h2>APARICIONES</h2>
          <ul>
            {" "}
            {character.episodes.map((item, index) => (
              <div key={item}>
                <li>{item}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="info2">
          <h2>FAMILIARES</h2>
          <ul>
            {" "}
            {character.simblings.map((item, index) => (
              <div key={item}>
                <li>{item}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="info2">
          <h2>TITULOS</h2>
          <ul>
            {" "}
            {character.titles.map((item, index) => (
              <div key={item}>
                <li>{item}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="info2">
          <h2>PADRES</h2>
          <ul>
            {" "}
            {character.parents.map((item, index) => (
              <div key={item}>
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
