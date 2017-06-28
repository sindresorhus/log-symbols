'use strict';
var chalk = require('chalk');
var isBrowser = require('is-in-browser').default;
var os = require('os');
var support = isBrowser || process.platform !== 'win32' || parseFloat(os.release()) >= 10

var main = {
	info: chalk.blue('ℹ'),
	success: chalk.green('✔'),
	warning: chalk.yellow('⚠'),
	error: chalk.red('✖')
};

var downgrade = {
	info: chalk.blue('i'),
	success: chalk.green('√'),
	warning: chalk.yellow('‼'),
	error: chalk.red('×')
};

module.exports = support ? main : downgrade;
