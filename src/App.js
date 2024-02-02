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
import React, { useState } from 'react';
import ComponenteEspanol from './Languages/ComponenteEspanol';
import ComponenteIngles from './Languages/ComponenteIngles';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';


function App() {

  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (

    <>
   <I18nextProvider i18n={i18n}/>
    <Router>
    <div>     
            <button onClick={() => changeLanguage('es')}><img src="bandera_espanol.png" alt="Español" /></button>
            <button onClick={() => changeLanguage('en')}><img src="bandera_ingles.png" alt="Inglés" /></button>
          </div>
          
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
                <Link to="/personajes"><h3>{t("PERSONAJES")}</h3></Link>
              </li>
              <li>
                <Link to="/casas"><h3> CASAS</h3></Link>
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

      {i18n.language === 'es' ? <ComponenteEspanol /> : <ComponenteIngles />}
      <I18nextProvider/>

    </>
  );
}

export default App;