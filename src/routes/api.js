const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Ruta para obtener datos desde MongoDB
router.get('/datos', dataController.obtenerDatos);

module.exports = router;