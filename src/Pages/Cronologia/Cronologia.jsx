import "./Cronologia.css";
import { useState, useEffect } from "react";

export default function Cronologia() {
  const [characters, setCharacters] = useState(true);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los personajes:', error);
        setLoading(false);
        // Puedes establecer un estado de error aquí
      }
    };

    getCharacters();
  }, []);

  // if (loading) {
  //   return <div>Cargando...</div>;
  // }

  // if (!characters) {
  //   return <div>Error al cargar los personajes. Por favor, inténtalo de nuevo.</div>;
  // }

  const orderByAge = () => {
    setCharacters(!characters);
  };

  const filteredCharacters = (Array.isArray(characters) ? characters : []).filter((char) => char.age !== null);
const orderCharacters = [...filteredCharacters].sort((a, b) =>
  characters ? a.age - b.age : b.age - a.age
);


  return (
    <div>
      <div className="contenedor">
        <div className="chronology">
          <div className="timeline">
            <div className="centrar-todo">
              <div>
                <button onClick={orderByAge} className="btn-chronology">
                  {characters ? "⇩" : "⇧"}
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


