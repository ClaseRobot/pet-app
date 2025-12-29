//  Conexión a la base de datos
// import mongoose from 'mongoose'
// import dotenv from 'dotenv'
const mongoose = require('mongoose');
require('dotenv').config();

// dotenv.config()

const connectDB = async () => {
  console.log('Intentando conectar a:', process.env.MONGO_URI);
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('🚀 MongoDB Atlas Conectado...');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error.message);
    process.exit(1); // Detener la app si no hay conexion
  }
}

// export default connectDB;
module.exports = connectDB;