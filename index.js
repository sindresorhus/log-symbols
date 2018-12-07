'use strict';
const chalk = require('chalk');

const isSupported = process.platform !== 'win32' || process.env.CI || process.env.TERM === 'xterm-256color';

const main = {
	info: chalk.blue('ℹ'),
	success: chalk.green('✔'),
	warning: chalk.yellow('⚠'),
	error: chalk.red('✖'),
	question: chalk.cyan('?'),
	danger: chalk.white('☠')
};

const fallbacks = {
	info: chalk.blue('i'),
	success: chalk.green('√'),
	warning: chalk.yellow('‼'),
	error: chalk.red('×'),
	question: chalk.cyan('?'),
	danger: chalk.white('☠')
};

module.exports = isSupported ? main : fallbacks;
