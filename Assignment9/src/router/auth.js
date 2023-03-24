import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { registerUser, verifyUserCredentials } from '../database.js';
import { generateAuthToken } from '../utils.js';
import { sessions } from './middlewares/firewall.js';

const router = Router();

// Signup route
router.post('/signup', async (req, res, next) => {
    let id, token, sessionId;

    try {
        id = await registerUser(req.body);
    } catch (err) {
        err.code = 400;
        return next(err);
    }

    try {
        token = generateAuthToken(id);
        sessionId = uuid();
    } catch (err) {
        err = new Error('Something went wrong');
        err.code = 500;
        return next(err);
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
    let id, token, sessionId;
    try {
        id = await verifyUserCredentials(req.body);
    } catch (err) {
        err.code = 400;
        return next(err);
    }

    try {
        token = generateAuthToken(id);
        sessionId = uuid();
    } catch (err) {
        err = new Error('Something went wrong');
        err.code = 500;
        return next(err);
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