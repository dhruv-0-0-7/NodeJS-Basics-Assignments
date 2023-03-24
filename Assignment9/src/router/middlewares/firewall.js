import { verifyAuthToken } from "../../utils.js";
export const sessions = {};

function firewall(req, res, next) {
    let sessionId = req.cookies['sessionid'];
    if (!sessionId || !sessions[sessionId]) {
        const err = new Error('Unauthorized');
        err.code = 401;
        return next(err);
    }

    const token = sessions[sessionId].token;
    const { id } = verifyAuthToken(token);
    req.userId = id;
    req.sessionId = sessionId;
    next();
}

export default firewall;