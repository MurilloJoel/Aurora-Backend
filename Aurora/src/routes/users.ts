import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Usuarios de Aurora');
});

export default router;