const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Ruta para obtener datos desde MongoDB
router.get('/datosEmpleado',dataController.obtenerDatosEmpleado);
router.get('/datosUsuario',dataController.obtenerDatosUsuario);
//Ruta para poner datos a la base de datos
router.put('/datosEmpleado',dataController.crearDatosEmpleado);
router.put('/datosUsuario',dataController.crearDatosUsuario);
module.exports = router;