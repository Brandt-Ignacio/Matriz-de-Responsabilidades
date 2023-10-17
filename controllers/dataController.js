const mongoose = require('mongoose');
const datosEm = require('../routes/models/datosEmpleado');
const datosUs = require('../routes/models/datosUsuario');

exports.obtenerDatos = async (req, res) => {
  try {
    const datos = await datosEm.find({});
    return res.json(datos);
  } catch (error) {
    console.error('Error al obtener datos:', error);
    return res.status(500).json({ error: 'Error al obtener datos' });
  }
};

exports.obtenerDatosEmpleado = async (req, res) => {
  try {
    const datos = await datosEm.find({});
    return res.json(datos);
  } catch (error) {
    console.error('Error al obtener datos de empleados:', error);
    return res.status(500).json({ error: 'Error al obtener datos de empleados' });
  }
};

exports.obtenerDatosUsuario = async (req, res) => {
  try {
    const datos = await datosUs.find({});
    return res.json(datos);
  } catch (error) {
    console.error('Error al obtener datos de usuarios:', error);
    return res.status(500).json({ error: 'Error al obtener datos de usuarios' });
  }
};

exports.crearDatosEmpleado = async (req, res) => {
  const { nombre, edad, email, rol } = req.body;

  const nuevoDato = new datosEm({
    nombre,
    edad,
    email,
    rol,
  });

  try {
    await nuevoDato.save();
    console.log('Datos del empleado creados con éxito en MongoDB');
    res.status(201).json({ message: 'Datos creados con éxito' });
  } catch (error) {
    console.error('Error al crear datos del empleado en MongoDB:', error);
    res.status(500).json({ error: 'Error al crear datos del empleado' });
  }
};

exports.crearDatosUsuario = async (req, res) => {
  const { nombre, edad, email, contrasena } = req.body;

  const nuevoDato = new datosUs({
    nombre,
    edad,
    email,
    contrasena,
  });

  try {
    await nuevoDato.save();
    console.log('Datos del usuario creados con éxito en MongoDB');
    res.status(201).json({ message: 'Datos creados con éxito' });
  } catch (error) {
    console.error('Error al crear datos del usuario en MongoDB:', error);
    res.status(500).json({ error: 'Error al crear datos del usuario' });
  }
};
