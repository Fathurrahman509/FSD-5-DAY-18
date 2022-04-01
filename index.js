import express, { Router } from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/user.js';

const app = express();
const PORT = 3500;

app.use(bodyParser.json());

app.use('/user', userRoutes);

app.get('/', (req, res) => res.send('hello from the homepage'));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost${PORT}`));