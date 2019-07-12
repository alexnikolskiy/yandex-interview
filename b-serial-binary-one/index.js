const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const size = parseInt(line, 10);
    const items = [];
    let count = 0;

    rl.on('line', line => {
        items.push(Number(line));

        if (++count >= size) {
            process.stdout.write(longestSequence(items).toString());
            process.exit();
        }
    });
});

function longestSequence(items) {
    let best = 0;
    let count = 0;

    for (let item of items) {
        if (item > 0) {
            count++;
            best = Math.max(best, count);
        } else {
            count = 0;
        }
    }

    return best;
}

module.exports = longestSequence;
