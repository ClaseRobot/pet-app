import { HandleChatMessage } from '../../../domain/usecases/HandleChatMessage.js';
import { ChatResponderInMemory } from '../../../infrastructure/ChatResponderInMemory.js';

const responder = new ChatResponderInMemory();
const handleChatUseCase = new HandleChatMessage(responder);

export const handleChat = (req, res) => {
  try {
    const result = handleChatUseCase.execute(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
