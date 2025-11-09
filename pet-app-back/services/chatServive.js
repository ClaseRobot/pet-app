// Base de conocimiento ( TODO: mover esto a la DB más tarde)
const knowledgeBase = [
    { keywords: ['vacunas', 'calendario', 'vacunar'], response: 'El calendario de vacunas varía por edad y especie. Por favor, consulta el perfil de tu mascota o llama a tu veterinario para un esquema exacto.' },
    { keywords: ['comida', 'alimentacion', 'dieta', 'comer'], response: 'La alimentación debe ser adecuada a la edad, raza y nivel de actividad. ¡Evita el chocolate, uvas y cebollas!' },
    { keywords: ['peluqueria', 'corte', 'baño'], response: 'Busca en la sección "Servicios Cercanos" para encontrar las mejores peluquerías caninas cerca de ti. ¡Recuerda el cepillado diario!' },
    { keywords: ['gracias', 'hola', 'hi'], response: '¡Hola! ¿En qué puedo ayudarte hoy? Pregúntame sobre alimentación, vacunas o cuidados.' }
];

exports.getChatResponse = (userInput) => {
  const userMessage = userInput.text;
  console.log('userMessage', userMessage)
  const lowerInput = (userMessage ?? '').toLowerCase();

  for(const item of knowledgeBase) {
    if(item.keywords.some(keyword => lowerInput.includes(keyword))) {
      return { userMessageId: Date().toString(), botMessage: {id: Date().toString(), text: item.response, sender: 'BOT' }};
    }
  }

  return { userMessageId: Date().toString(), botMessage: {id: Date().toString(), text: 'Disculpa, no entendí tu pregunta. Por favor, sé más específico sobre alimentación, cuidados o vacunas.', sender: 'BOT'} };
}

