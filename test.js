'use strict';
var test = require('ava');
var chalk = require('chalk');
var logSymbols = require('./');

Object.keys(logSymbols).forEach(function (el) {
	console.log(logSymbols[el], el);
});
console.log('');

test('returns log symbols', function (t) {
	t.assert(chalk.stripColor(logSymbols.success) === '✔︎' ||
	         chalk.stripColor(logSymbols.success) === '√');
});
