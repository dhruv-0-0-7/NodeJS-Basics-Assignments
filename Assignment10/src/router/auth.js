import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { registerUser, verifyUserCredentials } from '../database.js';
import { generateAuthToken } from '../utils/utils.js';
import { sessions } from './middlewares/firewall.js';
import CustomError from '../utils/errors.js';

const router = Router();

// Signup route
router.post('/signup', async (req, res, next) => {
    console.log('something');
    let id, token, sessionId;

    try {
        id = await registerUser(req.body);
    } catch (err) {
        if (err instanceof CustomError)
            return next(err);
        return next(new CustomError());
    }

    try {
        token = generateAuthToken(id);
        sessionId = uuid();
    } catch (err) {
        return next(new CustomError());
    }

    sessions[sessionId] = { token };

    res.setHeader('Content-Type', 'application/json');
    res.cookie('sessionid', sessionId);
    res.locals.responseData = {
        message: 'Signup Success'
    };
    next();
});

// Signin route
router.post('/signin', async (req, res, next) => {
    console.log('something');
    let id, token, sessionId;
    try {
        id = await verifyUserCredentials(req.body);
    } catch (err) {
        if (err instanceof CustomError)
            return next(err);
        return next(new CustomError());
    }

    try {
        token = generateAuthToken(id);
        sessionId = uuid();
    } catch (err) {
        return next(new CustomError());
    }

    sessions[sessionId] = { token };

    res.setHeader('Content-Type', 'application/json');
    res.cookie('sessionid', sessionId);
    res.locals.responseData = {
        message: 'Signin Success'
    };
    next();
});

export default router;