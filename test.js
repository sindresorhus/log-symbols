'use strict';
const test = require('ava');
const stripAnsi = require('strip-ansi');
const logSymbols = require('.');

for (const [key, value] of Object.entries(logSymbols)) {
	console.log(value, key);
}

console.log('');

test('returns log symbols', t => {
	t.true(stripAnsi(logSymbols.success) === '✔' || stripAnsi(logSymbols.success) === '√');
});
