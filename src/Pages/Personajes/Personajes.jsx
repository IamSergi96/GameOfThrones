import React, { useEffect, useState } from 'react'

// import { Link } from 'react-router-dom'
import './Personajes.css'

const Personajes = () => {
  const [characters, setCharacter] = useState([])
  useEffect(()=>{
    const getCharacters = async() =>{
      const characterApi = await fetch('http://localhost:3000/characters')
      const characterJson = await characterApi.json()
      setCharacter(characterJson)
      console.log(characterJson)
    }
    getCharacters()
    
  },[])
  return (
    <>
    <div className='container2'>
      <div className='gallery'>
        {characters.map((character, index)=>
        <div key={index} className='div'>
          <h2 className='name'>{character.name}</h2>
          <img src={process.env.PUBLIC_URL + character.image} alt={character.name} className='image'/>
          {/* <Link to={`/personajes/${character.id}`}><button>Ver más</button></Link> */}
        </div>
        )}
      </div>
      </div>
    </>
  )
}

export default Personajes
