const fs = require('fs/promises');
const path = require('path');
const imageDir = path.join(__dirname, '../../images/');

function renderFileUploadPage(req, res) {
    res.sendFile(path.join(__dirname, '../../public/fileupload.html'));
}

async function fileUpload(req, res, next) {
    if (!req.file) return next(new Error('No file provided'));

    await fs.rename(`${imageDir}/${req.file.filename}`, `${imageDir}/${req.file.originalname}`);

    res.redirect('/api/file/upload');
}

module.exports = { fileUpload, renderFileUploadPage };