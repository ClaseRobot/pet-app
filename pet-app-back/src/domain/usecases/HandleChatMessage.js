
/* Esta es la lógica central del chat */
export class HandleChatMessage {
  constructor(chatResponder) {
    this.chatResponder = chatResponder;
  }

  execute(message) {
    if (!message?.text) {
      throw new Error('Mensaje inválido');
    }

    return this.chatResponder.respond(message);
  }
}
