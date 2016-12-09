'use strict';
var test = require('ava');
var chalk = require('chalk');
var logSymbols = require('./');

Object.keys(logSymbols).forEach(function (el) {
	console.log(logSymbols[el], el);
});
console.log('');

test('returns log symbols success', function (t) {
	t.assert(chalk.stripColor(logSymbols.success) === '✔' ||
	         chalk.stripColor(logSymbols.success) === '√');
});

test('returns log symbols info', function (t) {
	t.assert(chalk.stripColor(logSymbols.info) === 'ℹ' ||
	         chalk.stripColor(logSymbols.info) === 'i');
});

test('returns log symbols warning', function (t) {
	t.assert(chalk.stripColor(logSymbols.warning) === '⚠' ||
	         chalk.stripColor(logSymbols.warning) === '‼');
});

test('returns log symbols error', function (t) {
	t.assert(chalk.stripColor(logSymbols.error) === '✖' ||
	         chalk.stripColor(logSymbols.error) === '×');
});
