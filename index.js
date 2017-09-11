'use strict';
const path = require('path');
const fs = require('fs');
const cp = require('child_process');
const chalk = require('chalk');

const CpdePage = {
	932: true,
	936: true,
	949: true,
	950: true
};

const isSupported = (() => {
	if (process.platform !== 'win32' || process.env.CI) {
		return true;
	}

	if (process.env.ConEmuDir) {
		return false;
	}

	if (process.env.VSCODE_CWD) {
		return true;
	}

	if (fs.existsSync(path.join(process.env.windir, 'Fonts/seguiemj.ttf'))) {
		const codepage = cp.spawnSync('chcp').stdout.toString().replace(/^.*?(\d+)\s*$/, '$1');
		if (CpdePage[codepage]) {
			return true;
		}
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
