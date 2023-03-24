function errorHandler(err, req, res, next) {
    res.status(err.code).send({
        message: err.message
    });
}

export default errorHandler;