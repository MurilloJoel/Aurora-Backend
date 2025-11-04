import express from 'express';
import {
  getMessages,
  getMessageById,
  getMessagesByChatId,
  createMessage,
  updateMessage,
  deleteMessage
} from '../controllers/messages.js';

const router = express.Router();

router.get('/', getMessages);
router.get('/chat/:chatId', getMessagesByChatId);
router.get('/:id', getMessageById);
router.post('/', createMessage);
router.put('/:id', updateMessage);
router.delete('/:id', deleteMessage);

export default router;
