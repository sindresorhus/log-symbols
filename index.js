'use strict';
var chalk = require('chalk');
var os = require('os');
var support = process.platform !== 'win32' || process.versions.electron || parseFloat(os.release()) >= 10;

var main = {
	info: chalk.blue('ℹ'),
	success: chalk.green('✔'),
	warning: chalk.yellow('⚠'),
	error: chalk.red('✖')
};

var fallbacks = {
	info: chalk.blue('i'),
	success: chalk.green('√'),
	warning: chalk.yellow('‼'),
	error: chalk.red('×')
};

module.exports = support ? main : fallbacks;
