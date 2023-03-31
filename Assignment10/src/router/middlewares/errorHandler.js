import CustomError from "../../utils/errors.js";

function errorHandler(err, req, res, next) {
    if (!(err instanceof CustomError)) err = new CustomError();

    res.status(err.code).send({
        message: err.message,
        description: err.description
    });
}

export default errorHandler;