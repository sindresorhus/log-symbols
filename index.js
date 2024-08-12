import colors from 'yoctocolors';
import isUnicodeSupported from 'is-unicode-supported';

const main = {
	info: colors.blue('ℹ'),
	success: colors.green('✔'),
	warning: colors.yellow('⚠'),
	error: colors.red('✖'),
};

const fallback = {
	info: colors.blue('i'),
	success: colors.green('√'),
	warning: colors.yellow('‼'),
	error: colors.red('×'),
};

const logSymbols = isUnicodeSupported() ? main : fallback;

export default logSymbols;
