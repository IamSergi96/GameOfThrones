import React from 'react'
import './Paginator.css'
import { Link } from 'react-router-dom'

function Paginator() {
  return (
    <div className='container3'>
        <Link to='/casas'>PERSONAJES</Link>
        <Link to='/casas'>CASAS</Link>
        <Link to='/casas'>CRONOLOGIA</Link>
        <Link to='/casas'><img src='https://cdn-icons-png.flaticon.com/512/1946/1946488.png' alt='home'/></Link>
    </div>
  )
}

export default Paginator