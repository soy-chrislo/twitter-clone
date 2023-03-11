import { Router } from 'express';

const router: Router = Router();

router.get('/', (req, res) => {
  res.send('Hello World from main.ts!');
});

export default router;