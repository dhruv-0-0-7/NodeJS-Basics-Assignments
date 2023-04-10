const readLine = require('readline/promises');
const moment = require('moment-timezone');

class InputReader {
    constructor() {
        this.inputReader = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this._time = '';
        this._currentTimeZone = '';
        this._targetTimeZone = '';

        this.timezones = moment.tz.names();
        this.uniqueAbbreviations = new Set();

        this.timezones.forEach(name => {
            let abbr = moment.tz(name).format('z');
            this.uniqueAbbreviations.has(abbr) ?
                this.uniqueAbbreviations.delete(abbr) :
                this.uniqueAbbreviations.add(abbr);
        });
    }

    async readTime() {
        let time = '';
        const regex = /(?<hours>0[1-9]|1[012](?=\:))(?:\:)(?<minutes>(?<=\:)[0-5][0-9])(?:\ )(?<unit>(?<=\ )AM|PM)/;

        while (true) {
            time = await this.inputReader.question('Enter Time [hh:mm AM|PM] (default: Current Time) => ');

            if (!time) {
                time = moment().format('hh:mm A');
                break;
            }

            if (!regex.test(time))
                throw new Error('Invalid Time format');
            else
                break;
        }

        return time;
    }

    async readTimeZone(prefix) {
        let timezone = '';

        while (true) {
            timezone = await this.inputReader.question(`${prefix} TimeZone => `);

            if (!this.timezones.includes(timezone) && !this.uniqueAbbreviations.has(timezone))
                throw new Error('Invalid Timezone');
            else
                break;
        }

        return timezone;
    }

    async readInputs() {
        while (true) {
            try {
                this._time = await this.readTime();
            } catch (err) {
                console.error(err.message);
                continue;
            }

            try {
                this._currentTimeZone = await this.readTimeZone('Current');
            } catch (err) {
                console.error(err.message);
                continue;
            }

            try {
                this._targetTimeZone = await this.readTimeZone('Target');
            } catch (err) {
                console.error(err.message);
                continue;
            }

            this.inputReader.close();
            break;
        }
    }

    get time() {
        return this._time;
    }

    get currentTimeZone() {
        return this._currentTimeZone;
    }

    get targetTimeZone() {
        return this._targetTimeZone;
    }
}

module.exports = InputReader;