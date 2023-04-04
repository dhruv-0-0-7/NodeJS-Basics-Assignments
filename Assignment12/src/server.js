const express = require('express');
const path = require('path');
const { I18n } = require('i18n');
const app = express();

const i18n = new I18n({
    locales: ['en', 'fr', 'it'],
    directory: path.join(__dirname, './locales'),
    objectNotation: true
});

app.use(i18n.init);

app.get('/', (req, res) => {
    let greeting = 'greetings.';
    const hour = new Date().getHours();

    if (hour < 12) {
        greeting += 'morning';
    } else if (hour < 16) {
        greeting += 'noon';
    } else if (hour < 19) {
        greeting += 'evening';
    } else {
        greeting += 'night';
    }
    res.send({ greeting: res.__(greeting) });
});

app.listen(3000, () => {
    console.log('Server is running on Port: 3000');
});