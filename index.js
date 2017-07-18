'use strict';
var chalk = require('chalk');
var isSupported = (function() {
	if (process.platform !== 'win32') {
		return true;
	}

	var env = process.env;

	if (env.ConEmuDir) {
		return false
	}

	var os = require('os');
	var osRelease = os.release().split('.');
	if (
		Number(osRelease[0]) >= 10 &&
		Number(osRelease[2]) >= 10586
	) {
		// Windows 10
		return true;
	}
	return false;
})();

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

module.exports = isSupported ? main : fallbacks;
