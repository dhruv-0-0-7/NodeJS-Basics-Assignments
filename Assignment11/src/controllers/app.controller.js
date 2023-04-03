const { Router } = require('express');
const jsonController = require('./json.controller');
const fileUploadController = require('./file.controller');

const controller = Router();

controller.use('/json', jsonController);
controller.use('/file/upload', fileUploadController);

module.exports = controller;