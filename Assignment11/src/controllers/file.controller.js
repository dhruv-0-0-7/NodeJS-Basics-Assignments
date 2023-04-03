const { Router } = require('express');
const path = require('path');
const multer = require('multer');
const { fileUpload, renderFileUploadPage } = require('../services/file.service');

const controller = Router();
const multerMiddleware = multer({
    fileFilter(req, file, CB) {
        if (!file.originalname.match(/(?<!\..*)(\.(jpg|png|jpeg)$)/)) {
            return CB(new Error('Please upload Image file.'));
        }
        CB(undefined, true);
    },
    dest: path.join(__dirname, '../../images')
});

controller.get('/', renderFileUploadPage);
controller.post('/', multerMiddleware.single('image'), fileUpload);

module.exports = controller;