const mongoose = require('mongoose');


const datosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
      },
      edad: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true, // Esto asegura que no haya correos electrónicos duplicados en la base de datos
      },
      fechaDeRegistro: {
        type: Date,
        default: Date.now, // Esto establece la fecha de registro como la fecha actual por defecto
      },

  // Define la estructura de tus datos
});

module.exports = mongoose.model('Datos', datosSchema);