import './App.css';
import Casas from './Pages/Casas/Casas';
import Home from './Pages/Home/Home'
import Cronologia from './Pages/Cronologia/Cronologia';
import Personajes from './Pages/Personajes/Personajes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetalleCasas from './Components/Detalle/DetalleCasas';
import { Link } from 'react-router-dom';
import Detalle from './Components/Detalle/Detalle';
// import Paginator from './core/paginator/Paginator'


function App() {

  return (

    <>
  
    <Router>
        <Routes>
          <Route path='/personajes' element={<Personajes/>}></Route>
          <Route path='/casas' element={<Casas/>}></Route>
          <Route path='/cronologia' element={<Cronologia/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/casas/:id' element={<DetalleCasas/>}/>
          <Route path='/personajes/:id' element={<Detalle/>}/>
        </Routes>
        <nav>
            <ul className='lista'>
              <li>
                <Link to="/personajes"><h3>PERSONAJES</h3></Link>
              </li>
              <li>
                <Link to="/casas"><h3>CASAS</h3></Link>
              </li>
              <li>
                <Link to="/cronologia"><h3>CRONOLOGIA</h3></Link>
              </li>
              <li>
                <Link to="/"><h3>HOME</h3></Link>
              </li>
            </ul>
          </nav>
      </Router>

    </>
  );
}

export default App;