'use strict';
var test = require('ava');
var chalk = require('chalk');
var logSymbols = require('./');

Object.keys(logSymbols).forEach(function (el) {
	console.log(logSymbols[el], el);
});
console.log('');

if(process.env.CI){
	test('returns log symbols', function (t) {
		t.assert(chalk.stripColor(logSymbols.success) === '\u{2714}\u{fe0f}');
		process.env.CI = null;
	});
} else {
	test('returns log symbols', function (t) {
		t.assert(chalk.stripColor(logSymbols.success) === '✔' ||
				chalk.stripColor(logSymbols.success) === '√');
	});
	if (chalk.enabled) {
		test('log symbols has color', function (t) {
			t.assert(chalk.hasColor(logSymbols.success));
		});
	}
}
