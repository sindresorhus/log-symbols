'use strict';
var chalk = require('chalk');
var isSupported = process.platform !== 'win32' || typeof document !== 'undefined' && document.nodeType === 9;

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
