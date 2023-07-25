import fs from 'node:fs';
import https from 'node:https';
import http from 'node:http';

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import matchRoutes from './routes/match.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5543;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  })
);
app.use('/match', matchRoutes);

const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  const options = {
    key: fs.readFileSync('./certs/private.key'),
    cert: fs.readFileSync('./certs/faceit-helper_pro.crt'),
    ca: [
      fs.readFileSync('./certs/faceit-helper_pro-root.crt'),
      fs.readFileSync('./certs/faceit-helper_pro-bundle.crt'),
    ],
  };

  https.createServer(options, app).listen(port, () => {
    console.log(`HTTPS Server is running on port ${port}`);
  });
} else {
  http.createServer(app).listen(port, () => {
    console.log(`HTTP Server is running on port ${port}`);
  });
}
