// Archivo principal para iniciar el servidor
const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000;

const petRoutes = require('./routes/petRoutes')
const userRoutes = require('./routes/userRoutes')

// Middleware: permite a Express procesar JSON.
// Esto es crucial para manejar los datos enviados desde el frontend (Angular).
app.use(express.json());
app.use(cors())

app.use('/api', petRoutes)
app.use('/user', userRoutes)

// Ruta de prueba para verificar que el servidor funciona
app.get('/', (req, res) => {
  console.log('App de mascotas funcionando')
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})