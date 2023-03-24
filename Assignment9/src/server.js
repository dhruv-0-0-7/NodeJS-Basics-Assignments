import express from 'express';
import cookieParser from 'cookie-parser';
import authRouter from './router/auth.js';
import userRouter from './router/user.js';
import errorHandler from './router/middlewares/errorHandler.js';
import responseHandler from './router/middlewares/responseHandler.js';

const app = express();
const PORT = 3000;
const HOST = 'localhost';

app.use(express.json());
app.use(cookieParser());
app.use('/api', authRouter, userRouter);
app.use(responseHandler);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});