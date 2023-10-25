import React from 'react';
import './styles.css'; // Corrige la ruta al archivo CSS

function inicio() {
  return (
    <React.Fragment>
    <div className="barra">
      <ul>
        <img src="imagenes/ejemplo logo.png" alt="imagenes" className="img" />
        <br />
        <br />
        <li><a href="inicio.html">INICIO</a></li>
        <br />
        <li><a href="pagina2.html">PROYECTOS</a></li>
        <br />
        <li><a href="pagina3.html">Página 3</a></li>
        <br />
        <li><a href="pagina4.html">Página 4</a></li>
        <br />
        <li><a href="pagina5.html">Página 5</a></li>
        <br />
        <li><a href="pagina6.html">Página 6</a></li>
      </ul>
    </div>
    <div className="cuerpo">
      <h1>Bienvenido a mi página de inicio</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>PROYECTO DE MATRICES DE RESPONSABILIDAD</p>
      <p>Integrantes: Maia Capizzi, Ignacio Brandt, Santiago Condori y Mateo Miranda</p>
    </div>
    </React.Fragment>
  );
}

export default inicio;