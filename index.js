'use strict';
const chalk = require('chalk');

const isSupported = process.platform !== 'win32' || process.env.CI || process.env.TERM === 'xterm-256color' || (process.platform === 'win32' && process.env.TERM === 'alacritty');

const main = {
	info: chalk.blue('ℹ'),
	success: chalk.green('✔'),
	warning: chalk.yellow('⚠'),
	error: chalk.red('✖')
};

const fallbacks = {
	info: chalk.blue('i'),
	success: chalk.green('√'),
	warning: chalk.yellow('‼'),
	error: chalk.red('×')
};

module.exports = isSupported ? main : fallbacks;
