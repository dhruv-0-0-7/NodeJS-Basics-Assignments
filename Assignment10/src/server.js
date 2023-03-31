import express from 'express';
import cookieParser from 'cookie-parser';
import authRouter from './router/auth.js';
import userRouter from './router/user.js';
import errorHandler from './router/middlewares/errorHandler.js';
import responseHandler from './router/middlewares/responseHandler.js';
import CustomError, { ERRORS } from './utils/errors.js';

const app = express();
const PORT = 3000;
const HOST = 'localhost';

// Request JSON data parsing
app.use(express.json());
// Request Cookies parsing
app.use(cookieParser());

// Business logic
app.use('/api', authRouter, userRouter, responseHandler);
// Any route - To serve 'Not found' content
app.use('*', function (req, res, next) { next(new CustomError(ERRORS.CERR_45)); });

// Error Handler Middleware
app.use(errorHandler);

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});