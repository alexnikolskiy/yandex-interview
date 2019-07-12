const assert = require('assert').strict;
const findJewerly = require('./index');

assert.equal(4, findJewerly('ab', 'aabbccd'));
assert.equal(7, findJewerly('ab', 'aaaaaaa'));
assert.equal(0, findJewerly('ab', 'ccccddd'));

console.info('OK!');
process.exit();
