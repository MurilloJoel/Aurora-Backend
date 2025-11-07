import express from 'express';
import {
  getChats,
  getChatById,
  createChat,
  updateChat,
  deleteChat,
} from '../controllers/chatsController.js';

const router = express.Router();

router.get('/', getChats);
router.get('/:id', getChatById);
router.post('/', createChat);
router.put('/:id', updateChat);
router.delete('/:id', deleteChat);

export default router;
