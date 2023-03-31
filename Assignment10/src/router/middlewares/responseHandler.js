function responseHandler(req, res, next) {
    if (res?.locals?.responseData && Object.keys(res.locals.responseData).length) {
        const { message, body } = res.locals.responseData;
        if (body?.password) delete body.password;

        return res.send({ message, body });
    }

    next();
}

export default responseHandler;