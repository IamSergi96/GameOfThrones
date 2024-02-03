import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Personajes.css'

const Personajes = () => {
  const [characters, setCharacter] = useState([])
  const [filtro, setFiltro] = useState('')
  useEffect(()=>{
    const getCharacters = async() =>{
      const characterApi = await fetch('http://localhost:3000/characters')
      const characterJson = await characterApi.json()
      setCharacter(characterJson)
      console.log(characterJson)
    }
    getCharacters()
  },[])
  const charactersFiltered = characters.filter(character =>
  character.name.toLowerCase().includes(filtro.toLowerCase())) 

  return (
    <>
    <div className='container2'>
    <input
          type="text"
          placeholder="Buscar Personaje"
          value={filtro}
          onChange={e => setFiltro(e.target.value)}
        />
      <div className='gallery'>
        {charactersFiltered.map((character, index)=>
        
        <div key={index} className='div'>
          <h2 className='name'>{character.name}</h2>
          <Link to={`/personajes/${character.id}`}>
            <img src={process.env.PUBLIC_URL + character.image} alt={character.name} className='image'/>
          </Link>
        </div>
        )}
      </div>
      </div>
    </>
  )
}

export default Personajes
