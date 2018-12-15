'use strict';
import test from 'ava';
import stripAnsi from 'strip-ansi';
import logSymbols from '.';

// TODO: Use `Object.entries` when targeting Node.js 8
for (const key of Object.keys(logSymbols)) {
	console.log(logSymbols[key], key);
}
console.log('');

test('returns log symbols', t => {
	t.true(stripAnsi(logSymbols.success) === '✔' || stripAnsi(logSymbols.success) === '√');
});
