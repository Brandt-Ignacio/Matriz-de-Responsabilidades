import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import inicio from './inicio';
import sinContrasena from './sinContrasena';
import registro from './registro';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="cabeza">
            <br />
            <h1>¡ENTRÁ A TU CUENTA!</h1>
            <p>Inicia sesión para continuar.</p>
            <br />
          </div>
          <br />
          <div className="cuerpo">
            <form id="login-form">
              <input type="text" placeholder="Correo electrónico" id="email" />
              <br />
              <input type="password" placeholder="Contraseña" id="password" />
              <a style={{ textAlign: 'center' }} href="/forgot_password">
                ¿Olvidaste la contraseña?
              </a>
              <br />
              <button type="submit">ENTRAR</button>
            </form>
          </div>
          <br />
          <div className="pie">
            <br />
            <br />
            <a style={{ color: 'aliceblue' }} href="/registro">
              REGISTRARME
            </a>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<inicio />} /> 
          <Route path="/sinContrasena" element={<sinContrasena />} /> 
          <Route path="/registro" element={<registro />} /> 
        </Routes>
      </div>
    );
  }
}

export default App;