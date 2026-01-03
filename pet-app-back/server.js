// Archivo principal para iniciar el servidor
const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000;

const petRoutes = require('./src/adapters/http/routes/petRoutes')
const userRoutes = require('./src/adapters/http/routes/userRoutes')
const chatRoutes = require('./src/adapters/http/routes/chatRoutes')

// Middleware: permite a Express procesar JSON.
// Esto es crucial para manejar los datos enviados desde el frontend (Angular).
app.use(express.json());
app.use(cors())

// Middleware de Log (Se ejecuta después del body-parser)
app.use((req, res, next) => {
    // Solo loguea si es una solicitud POST, PUT o PATCH que tienen cuerpo
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
        console.log(`\n📦 Solicitud ${req.method} a ${req.originalUrl}`);
        console.log("➡️ Payload Global:", req.body);
    }
    next(); // ¡Importante! Pasa el control a la siguiente función/ruta
});

app.use('/api', petRoutes)
app.use('/user', userRoutes)
app.use('/chatbot', chatRoutes)

// Ruta de prueba para verificar que el servidor funciona
app.get('/', (req, res) => {
  console.log('App de mascotas funcionando')
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})