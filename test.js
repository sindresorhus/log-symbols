'use strict';
import test from 'ava';
import stripAnsi from 'strip-ansi';
import b from './browser';
import m from '.';

for (const key of Object.keys(m)) {
	console.log(m[key], key);
}
console.log('');

test('returns log symbols', t => {
	t.true(stripAnsi(m.success) === '✔' || stripAnsi(m.success) === '√');
});

test('browser support', t => {
	t.deepEqual(b, {
		info: 'ℹ️',
		success: '✔️',
		warning: '⚠️',
		error: '❌️'
	});
});
