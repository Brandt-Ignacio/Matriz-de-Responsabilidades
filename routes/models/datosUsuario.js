const mongoose = require('mongoose');


const datosUsuario = new mongoose.Schema({

    nombre: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        required: true,
        unique: true, // Esto asegura que no haya correos electrónicos duplicados en la base de datos
      },
     contrasena:{
type:String,
required:true,
unique:true,
     }

  // Define la estructura de tus datos
});

module.exports = mongoose.model('DatosUs', datosUsuario);