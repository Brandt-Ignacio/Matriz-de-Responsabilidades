import React from 'react';
import './style.css'; // Corrige la ruta al archivo CSS

function sinContrasena() {
    return (
      <div className="container2">
        <div className="cabeza">
          <br />
          <h1>¡CREA UNA NUEVA CUENTA!</h1>
          <p>
            ¿Ya estás registrado?{' '}
            <a style={{ color: 'aliceblue' }} href="index.html">
              Ingresa aquí
            </a>
          </p>
          <br />
        </div>
  
        <form id="register-form">
          <input type="text" placeholder="Nombre completo" id="name" />
          <br />
          <input type="text" placeholder="Correo electrónico" id="email" />
          <br />
          <input type="password" placeholder="Contraseña" id="password" />
          <br />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            id="confirm-password"
          />
        </form>
        <div className="pie">
          <br />
          <br />
          <button type="submit">REGISTRARME</button>
        </div>
      </div>
    );
  }
  
  export default sinContrasena;