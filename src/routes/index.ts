import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Bienvenido a Aurora 🚀');
});

export default router;