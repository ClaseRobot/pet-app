const express = require('express')
const router = express.Router()
const chatController = require('../controllers/chatController')

// Endpoint para enviar un mensaje al bot
router.post('/', chatController.handleChat)

module.exports = router