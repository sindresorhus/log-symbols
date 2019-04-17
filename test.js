'use strict';
import test from 'ava';
import stripAnsi from 'strip-ansi';
import logSymbols from '.';

for (const [key, value] of Object.entries(logSymbols)) {
	console.log(value, key);
}

console.log('');

test('returns log symbols', t => {
	t.true(stripAnsi(logSymbols.success) === '✔' || stripAnsi(logSymbols.success) === '√');
});
