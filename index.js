'use strict';
var color = require('./color')
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

module.exports = process.env.CI ? require('./browser') : color(isSupported ? require('./posix') : require('./fallback'));
