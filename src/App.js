import './App.css';
import Casas from './Pages/Casas/Casas';
import Home from './Pages/Home/Home'
import Cronologia from './Pages/Cronologia/Cronologia';
import Personajes from './Pages/Personajes/Personajes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetalleCasas from './Components/Detalle/DetalleCasas';
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
        </Routes>
      </Router>
      
      

      

    </>
  );
}

export default App;