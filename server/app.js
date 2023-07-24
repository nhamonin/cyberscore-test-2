import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import matchRoutes from './routes/match.js';

const app = express();
const port = process.env.PORT || 5543;

dotenv.config();

app.use(cors());
app.use('/match', matchRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
