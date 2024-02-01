import React from "react";
import "./Casas.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Casas = () => {
  const [casas, setCasas] = useState([]);
  const [filtro, setFiltro] = useState("");
  // preguntar a los chicos

  useEffect(() => {
    const getCasas = async () => {
      const casaApi = await fetch(
        'http://localhost:3000/houses'
      );
      const casaJson = await casaApi.json();
      setCasas(casaJson);
    };

    getCasas();
  }, []);

  const casasFiltradas = casas.filter((casa) =>
    casa.name.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="casas">
      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar casas"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </div>

      <div className="imgYnom">
        {casasFiltradas.map((casa) => (
          <section  key={casa.id}>
            <Link to={`/casas/${casa.id}`}>
              <img src={casa.image} alt="" />
            </Link>
            <h3> {casa.name} </h3>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Casas;
