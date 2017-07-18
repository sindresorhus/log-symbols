'use strict';
var chalk = require('chalk');
module.exports = function(module) {
	return {
		info: chalk.blue(module.info),
		success: chalk.green(module.success),
		warning: chalk.yellow(module.warning),
		error: chalk.red(module.error),
	};
};
