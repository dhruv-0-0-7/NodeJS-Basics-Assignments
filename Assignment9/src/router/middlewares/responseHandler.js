function responseHandler(req, res) {
    const { message, body } = res.locals.responseData;
    if (body?.password) delete body.password;

    res.send({ message, body });
}

export default responseHandler;