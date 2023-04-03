const fs = require('fs/promises');
const path = require('path');
const Item = require('../utils/Item');
const filePath = path.join(__dirname, '../database/data.json');

// Utilities
async function getFileData() {
    return JSON.parse((await fs.readFile(filePath)).toString());
}

async function saveFileData(data) {
    await fs.writeFile(filePath, JSON.stringify(data));
}

// Route Handlers
async function getAllData(req, res, next) {
    const data = await getFileData();
    res.send({ message: 'Success', items: data.items });
}

async function addDataToFile(req, res, next) {
    let data = await getFileData();
    const newItem = new Item({ title: req.body.title });
    data.items.push(newItem);

    await saveFileData(data);
    res.send({ message: 'Success', item: newItem });
}

async function updateDataInFile(req, res, next) {
    const id = req.params.id;
    const newTitle = req.body.title;
    let newItem = null;
    const data = await getFileData();

    const index = data.items.findIndex(item => item.id === id);
    if (index === -1) return next(new Error('Item not found'));

    data.items = data.items.map(item => {
        if (item.id === id) {
            console.log('reached');
            newItem = Item.fromJSON(item);
            newItem.updateItem(newTitle);
            return newItem;
        }
        return item;
    });

    await saveFileData(data);
    res.send({ message: 'Success', item: newItem });
}

async function deleteDataInFile(req, res, next) {
    const id = req.params.id;
    const data = await getFileData();
    const index = data.items.findIndex(item => item.id === id);
    if (index === -1) return next(new Error('Item not found'));
    data.items.splice(index, 1);

    await saveFileData(data);
    res.send({ message: 'Success' });
}

module.exports = {
    getAllData,
    addDataToFile,
    updateDataInFile,
    deleteDataInFile
};