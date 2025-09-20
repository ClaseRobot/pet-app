//  # Definición de los endpoints de la API
const express = require('express')
const router = express.Router()

const petController = require('../controllers/petController')

// Define GET route for '/pets'
router.get('/pets', petController.getAllPets)

// Exporto el router para que pueda ser usado en server.js
module.exports = router