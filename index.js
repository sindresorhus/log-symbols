'use strict';
var chalk = require('chalk');
var os = require('os');
var isSupported = process.platform !== 'win32' || os.release().split('.')[0] >= 10 || process.versions.electron;

var main = {
	info: chalk.blue('ℹ'),
	success: chalk.green('✔️'),
	warning: chalk.yellow('⚠️'),
	error: chalk.red('❌️')
};

var fallbacks = {
	info: chalk.blue('i'),
	success: chalk.green('√'),
	warning: chalk.yellow('‼'),
	error: chalk.red('×')
};

module.exports = isSupported ? main : fallbacks;
