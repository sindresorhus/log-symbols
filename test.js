import test from 'ava';
import stripAnsi from 'strip-ansi';
import logSymbols from './index.js';

const symbols = Object.entries(logSymbols)
	.map(([key, value]) => `${value} ${key}`)
	.join('\n');

test('returns log symbols', t => {
	t.true(stripAnsi(logSymbols.info) === 'ℹ' || stripAnsi(logSymbols.info) === 'i');
	t.true(stripAnsi(logSymbols.success) === '✔' || stripAnsi(logSymbols.success) === '√');
	t.true(stripAnsi(logSymbols.warning) === '⚠' || stripAnsi(logSymbols.warning) === '‼');
	t.true(stripAnsi(logSymbols.error) === '✖' || stripAnsi(logSymbols.error) === '×');
	t.log(symbols);
});

test('confirms Unicode code point for log symbols', t => {
	const infoCodePoint = stripAnsi(logSymbols.info).codePointAt(0);
	const successCodePoint = stripAnsi(logSymbols.success).codePointAt(0);
	const warningCodePoint = stripAnsi(logSymbols.warning).codePointAt(0);
	const errorCodePoint = stripAnsi(logSymbols.error).codePointAt(0);

	t.true(infoCodePoint === 8505 || infoCodePoint === 105);
	t.true(successCodePoint === 10_004 || successCodePoint === 8730);
	t.true(warningCodePoint === 9888 || warningCodePoint === 8252);
	t.true(errorCodePoint === 10_006 || errorCodePoint === 215);
});
