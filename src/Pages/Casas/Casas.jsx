import React from 'react'
import './Casas.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

const Casas = () => {
  const [casas, setCasas] = useState([]);
  const [filtro, setFiltro] = useState (''); 
  // preguntar a los chicos

  useEffect (() => {
    const getCasas = async () => {
      const casaApi = await fetch ("https://game-of-thrones-json-server.vercel.app/houses")
      const casaJson = await casaApi.json();
      setCasas(casaJson);
    }
    
    getCasas ();
  },[]);

const casasFiltradas = casas.filter(casa =>
  casa.name.toLowerCase().includes(filtro.toLowerCase())) 
  // preguntar a los chicos

  return (
    <>
      <div>
           <input
          type="text"
          placeholder="Buscar casas"
          value={filtro}
          onChange={e => setFiltro(e.target.value)}
        />

        {casasFiltradas.map(casa => (
          <section key={casa.id}>

           {/* preguntar a los chicos   */}

            <img src={casa.image} alt="" />
            <h3> {casa.name} </h3>
            <Link to={`/casas/${casa.id}`}>
              <button>Ver más</button>
            </Link>
          </section>
        ))}
      </div>
    </>
  );
}

export default Casas;
