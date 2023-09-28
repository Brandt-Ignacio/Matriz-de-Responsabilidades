const mongoose = require('mongoose');

const dbUser = 'CondoriHuanca'; // Nombre de usuario de MongoDB Atlas
const dbPassword = 'gAvB1KmonEjy0SEg'; // Contraseña de MongoDB Atlas
const dbCluster = 'cluster0'; // Cluster de MongoDB Atlas

const dbURL = `mongodb+srv://${dbUser}:${dbPassword}@${dbCluster}.so3yidd.mongodb.net/?retryWrites=true&w=majority";`;

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB Atlas');
});

module.exports = db;