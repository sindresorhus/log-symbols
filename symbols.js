import {blue, green, yellow, red} from 'yoctocolors';
import isUnicodeSupported from 'is-unicode-supported';

const info = blue(isUnicodeSupported() ? 'ℹ' : 'i');
const success = green(isUnicodeSupported() ? '✔' : '√');
const warning = yellow(isUnicodeSupported() ? '⚠' : '‼');
const error = red(isUnicodeSupported() ? '✖️' : '×');

export {info, success, warning, error};
