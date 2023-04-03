const express = require('express');

const appController = require('./controllers/app.controller');
const errorHandler = require('./services/error.service');

const app = express();
const PORT = 3000;
const HOST = 'localhost';

app.use(express.json());

app.use('/api', appController);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});