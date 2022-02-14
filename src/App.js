import React, {useEffect} from 'react'; 
import './assets/App.css';
//librarys
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
//pages
import Login from './views/Login/Login';
import Clientes from './views/Clientes/Clientes';
import Vehiculos from './views/Vehiculos/Vehiculos';
import Inicio from './views/Inicio';
import Navbar from './templates/Navbar';
import RecuperarContrasenia from './views/RecuperarContrasenia/RecuperarContrasenia';

function App() {

  useEffect(() =>{

  }, []);


  return (
    <div className="App">
        {/*Routes*/}
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>} ></Route>
                <Route exact path="/inicio" element={<Inicio/>} ></Route>                
                <Route exact path="/clientes" element={<Clientes/>} ></Route>
                <Route exact path="/recuperar-contrasenia" element={<RecuperarContrasenia/>} ></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
