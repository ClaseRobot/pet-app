import { knowledgeBase } from '..KnowledgeBase.js';

export class ChatResponderInMemory {
  respond(userInput) {
    const text = (userInput.text ?? '').toLowerCase();

    for (const item of knowledgeBase) {
      if (item.keywords.some(k => text.includes(k))) {
        return this.buildResponse(item.response);
      }
    }

    return this.buildResponse(
      'Disculpa, no entendí tu pregunta. Sé más específico.'
    );
  }

  buildResponse(text) {
    const id = Date.now().toString();
    return {
      userMessageId: id,
      botMessage: { id, text, sender: 'BOT' }
    };
  }
}
