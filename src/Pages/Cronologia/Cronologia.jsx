import Header from "../../Components/Header/Header";
import "./Cronologia.css";
import { useState, useEffect } from "react";

export default function Cronologia() {
  const [characters, setCharacters] = useState([]);
  const [orderAsc, setOrderAsc] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const characterApi = await fetch('http://localhost:3000/characters');
        if (!characterApi.ok) {
          throw new Error('La respuesta de la red no fue exitosa');
        }
        const characterJson = await characterApi.json();
        console.log(characterJson);
        setCharacters(characterJson);

      } catch (error) {
        console.error('Error al obtener los personajes:', error);
      }
    };

    getCharacters();
  }, []);

  const orderByAge = () => {
    setOrderAsc(!orderAsc);
  };

  const filteredCharacters = characters.filter((char) => char.age !== null);

  const orderCharacters = orderAsc
    ? [...filteredCharacters].sort((a, b) => a.age - b.age) // Orden ascendente
    : [...filteredCharacters].sort((a, b) => b.age - a.age); // Orden descendente

  return (
    <div>
 
      <div className="contenedor">
        <div className="chronology">
          <div className="timeline">
            <div className="centrar-todo">
              <div>
                <button onClick={orderByAge} className="btn-chronology">
                  {orderAsc ? "⇩" : "⇧"}
                </button>
                {orderCharacters.length > 0 ? (
                  <div className="btn-chronology-age">
                    <p>{orderCharacters[0].age}</p>
                  </div>
                ) : null}
              </div>
              {orderCharacters.map((charac) => (
                <div key={charac.id} className="contenedor-chronology">
                  <div className="personajes">
                    {charac.age ? (
                      <p>{charac.age}</p>
                    ) : null}
                    <h5>{charac.name}</h5>
                    <div className="imagen">
                      <img
                        className="chrono_img"
                        src={charac.image}
                        alt={charac.name}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
