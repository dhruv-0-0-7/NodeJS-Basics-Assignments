import { verifyAuthToken } from "../../utils/utils.js";
import CustomError, { ERRORS } from "../../utils/errors.js";
export const sessions = {};

function firewall(req, res, next) {
    let sessionId = req.cookies['sessionid'];
    if (!sessionId || !sessions[sessionId])
        return next(new CustomError(ERRORS.CERR_41));

    const token = sessions[sessionId].token;
    const { id } = verifyAuthToken(token);
    req.userId = id;
    req.sessionId = sessionId;
    next();
}

export default firewall;