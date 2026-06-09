import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Ledgerly API is running',
  });
});

router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    app: 'Ledgerly',
  });
});

export default router;