import { Router } from 'express';
import { deleteUser, getUserById } from '../database.js';
import firewall, { sessions } from './middlewares/firewall.js';

const router = Router();

// Get Profile route
router.get('/profile', firewall, function (req, res, next) {
    const user = getUserById(req.userId);
    res.setHeader('Content-Type', 'application/json');
    res.locals.responseData = {
        message: 'Fetch User Success',
        body: user
    };
    next();
});

// Close Account route
router.delete('/closeaccount', firewall, function (req, res, next) {
    deleteUser(req.userId);
    delete sessions[req.sessionId];

    res.setHeader('Content-Type', 'application/json');
    res.locals.responseData = {
        message: 'Account Closed'
    };
    next();
});

export default router;