const { v4: uuid } = require('uuid');

class Item {
    constructor(data) {
        this.id = data.id ?? uuid();
        this.title = data.title;

        const date = +new Date();
        this.createdAt = data.createdAt ?? date;
        this.updatedAt = data.updatedAt ?? date;
    }

    updateItem(title) {
        this.title = title;
        this.updatedAt = +new Date();
    }

    static fromJSON(item) {
        return new Item(item);
    }
}

module.exports = Item;