const assert = require('assert').strict;
const longestSequence = require('./index');

assert.equal(1, longestSequence([1, 0, 1, 0, 1]));
assert.equal(2, longestSequence([1, 0, 1, 1, 0]));
assert.equal(3, longestSequence([1, 1, 1]));
assert.equal(0, longestSequence([0, 0, 0]));

console.info('OK!');
process.exit();
