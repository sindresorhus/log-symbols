'use strict';
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

const isSupported = (() => {
	if (process.platform !== 'win32' || process.env.CI) {
		return true;
	}

	if (process.env.ConEmuDir) {
		return false;
	}

	return fs.existsSync(path.join(process.env.windir, 'Fonts/seguiemj.ttf'));
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
