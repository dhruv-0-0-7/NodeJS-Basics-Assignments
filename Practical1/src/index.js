const moment = require('moment-timezone');
const InputReader = require('./utils/InputReader');

async function main() {
    const inputReader = new InputReader();
    await inputReader.readInputs();

    const timeFormat = 'hh:mm A';
    const originalMomentObject = moment.tz(inputReader.time, timeFormat, inputReader.currentTimeZone);
    const targetMomentObject = originalMomentObject.clone().tz(inputReader.targetTimeZone);
    const output = targetMomentObject.format(timeFormat);

    console.log(`OUTPUT: ${output}`);
}

main();