const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./database'); // Importa la conexión a MongoDB desde database.js
const path = require('path');

const app = express();

// Configuración de middleware
app.use(morgan('dev')); // Middleware para registrar solicitudes
app.use(express.json()); // Middleware para analizar datos JSON

// Configuración de rutas API
app.use('/api', require('./routes/api'));

// Configuración de archivos estáticos (tu index.html)
app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});





