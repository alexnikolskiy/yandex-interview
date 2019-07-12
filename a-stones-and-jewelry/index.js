const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const jewerly = line.toString();

    rl.once('line', line => {
        const stones = line.toString();

        process.stdout.write(findJewerly(jewerly, stones).toString());
        process.exit();
    });
});

function findJewerly(jewerlyString, stonesString) {
    const jewelry = new Set(jewerlyString);
    let result = 0;

    for (let stone of stonesString) {
        if (jewelry.has(stone)) {
            result++;
        }
    }

    return result;
}

module.exports = findJewerly;
