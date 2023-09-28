const mongoose = require('mongoose');
const Datos = require('../routes/models/datosModel'); // Supongamos que tienes un modelo de datos


exports.obtenerDatos = (req, res) => {
  Datos.find({}, (err, datos) => {
    if (err) {
      console.log('Conexión exitosa a MongoDB');
      return res.status(500).json({ error: err.message });
    }
    return res.json(datos);
  });
};