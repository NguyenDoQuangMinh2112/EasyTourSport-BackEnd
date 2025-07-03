import express from 'express';
import type { Express } from 'express';
import dotenv from 'dotenv';

import sequelize from '~/config/database';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Welcome to EasyTourSport system! Im Adam the creator of this server.');
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error: any) {
    console.error('Error:', error);
  }
})();