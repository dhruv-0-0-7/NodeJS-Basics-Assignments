const { Router } = require('express');
const {
    getAllData,
    addDataToFile,
    updateDataInFile,
    deleteDataInFile
} = require('../services/json.service');

const controller = Router();

controller.get('/', getAllData);

controller.post('/', addDataToFile);

controller.put('/:id', updateDataInFile);

controller.delete('/:id', deleteDataInFile);

module.exports = controller;