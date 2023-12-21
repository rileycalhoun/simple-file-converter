import { handler } from './build/handler';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.get('/health', (req, res) => res.send({
    status: 'ok'
}));

app.use(handler);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));