import express from 'express';
import userRouter from './routes/user.route.ts';

const server = express();

server.use(express.json());

server.use('/users', userRouter);

server.listen(3000);