import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import api from './api/api';
import { connectMongoDB } from './database/config';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
const port = process.env.PORT || 8001;
app.use(cors());
app.use(bodyParser.json());
// MongoDB connection
connectMongoDB()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define a simple route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript and MongoDB!');
});

app.use('/api', api);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
