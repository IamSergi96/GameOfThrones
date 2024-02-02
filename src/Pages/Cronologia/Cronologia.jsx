
import "./Cronologia.css";
import { useState, useEffect } from "react";

export default function Cronologia({ characters }) {
  const [ageAsc, setAgeAsc] = useState(true);

  useEffect(() => {
    // Esta función se ejecutará cuando el componente se monte
    const getCharacters = async () => {
      try {
        const characterApi = await fetch('http://localhost:3000/characters');
        const characterJson = await characterApi.json();
        // console.log(characterJson)

      } catch (error) {
        console.error('Error al obtener los personajes:', error);
      }
    };
    // Llama a la función getCharacters cuando el componente se monte
    getCharacters();
  }, []); // El segundo argumento es un array vacío, lo que significa que useEffect solo se ejecutará una vez al montar el componente
  if (!characters) {
    return <div>Loading...</div>; // O cualquier otro indicador de carga que desees mostrar
  }
  const orderByAge = () => {
    setAgeAsc(!ageAsc);
  };

  const filteredCharacters = characters.filter((char) => char.age !== null);
  const orderCharacters = [...filteredCharacters].sort((a, b) =>
    ageAsc ? a.age - b.age : b.age - a.age
  );

  return (
    <div>
      <div className="contenedor">
        <div className="chronology">
          <div className="timeline">
            <div className="centrar-todo">
              <div>
                <button onClick={orderByAge} className="btn-chronology">
                  {ageAsc ? "⇩" : "⇧"}
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

