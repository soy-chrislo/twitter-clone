import { Router } from 'express';
import app from '../../index';
import fs from 'fs';

const router: Router = Router();

fs.readdirSync(__dirname).forEach((file: string) => {
  const name: string = file.split('.')[0];
  if (name !== 'index' && name !== 'main') {
    // app.use(`/${name}`, async () => await import(`./${name}`));
    app.use(`/api/${name}`, require(`./${name}`).default);
    console.log(`Loaded route: ${name}`);
  } else if (name === 'main') {
    app.use('/api/', require(`./${name}`).default);
    console.log(`Loaded route: ${name}`);
  }
});

export default router;
