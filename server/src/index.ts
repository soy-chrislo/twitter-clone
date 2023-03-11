import('dotenv').then((dotenv) => {
  dotenv.config()
})

import express, { Application } from 'express';
const app: Application = express();
const port: string = process.env.PORT || '3000';

app.use(express.json());



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


import('./app/routes/index');

export default app;
