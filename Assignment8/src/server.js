const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { users } = require('./data/mockData');

class ServerFactory {
    constructor(engine, port = 3000) {
        this.port = port;
        this.engine = engine.keyword;

        this.app = express();

        this.app.set('view engine', this.engine);
        this.app.set('views', path.join(__dirname, `./views/${this.engine}`));

        this.app.get('/', (req, res) => {
            res.render('index', { users });
        });
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server is runnning on Port: ${this.port}.\nWith '${this.engine}' View Engine.\n\n`);
        });
    }
}

class ViewEngineGenerator {
    constructor(keyword) {
        const viewEngineStack = ['hbs', 'pug', 'ejs'];
        if (!viewEngineStack.includes(keyword))
            throw new Error('Enter valid View Engine');

        this.keyword = keyword;
        if (keyword === 'hbs') {
            hbs.registerPartials(path.join(__dirname, './views/hbs/partials'));
        }
    }
}

const viewEngine = new ViewEngineGenerator(process.argv[process.argv.length - 1]);
const server = new ServerFactory(viewEngine);

server.start();