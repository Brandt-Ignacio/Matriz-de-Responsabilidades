const mongoose = require('mongoose');


const datosEmpleado = new mongoose.Schema({
  rol:{
type:String,
required:true,
  },
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

module.exports = mongoose.model('DatosEm', datosEmpleado);