'use strict';
const os = require('os');
const chalk = require('chalk');

const isSupported = (() => {
	if (process.platform !== 'win32' || process.env.CI) {
		return true;
	}

	if (process.env.ConEmuDir) {
		return false;
	}

	// Windows 10
	const osRelease = os.release().split('.');
	if (
		Number(osRelease[0]) >= 10 &&
		Number(osRelease[2]) >= 10586
	) {
		return true;
	}

	return false;
})();

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
