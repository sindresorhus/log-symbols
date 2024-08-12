import {blue, green, red, yellow} from 'colorette';
import isUnicodeSupported from 'is-unicode-supported';

const main = {
	info: blue('ℹ'),
	success: green('✔'),
	warning: yellow('⚠'),
	error: red('✖'),
};

const fallback = {
	info: blue('i'),
	success: green('√'),
	warning: yellow('‼'),
	error: red('×'),
};

const logSymbols = isUnicodeSupported() ? main : fallback;

export default logSymbols;
