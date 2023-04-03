function errorHandler(err, req, res, next) {
    res.status(500).send({
        message: err.message || 'Something went wrong'
    });
}

module.exports = errorHandler;