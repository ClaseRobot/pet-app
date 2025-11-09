const chatService = require('../services/chatServive')

exports.handleChat = (req, res) => {
  // Obtener el mensaje del usuario del cuerpo de la peticion
  const message = req.body
  console.log('handleChat', message)

  if(!message) {
    return res.status(400).json({ error: 'Falta el campo message de la peticion'})
  }

  const botResponse = chatService.getChatResponse(message)

  res.json(botResponse)
}