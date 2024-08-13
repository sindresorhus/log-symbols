import {blue, green, yellow, red} from 'yoctocolors';
import isUnicodeSupported from 'is-unicode-supported';

const _isUnicodeSupported = isUnicodeSupported();

const info = blue(_isUnicodeSupported ? 'ℹ' : 'i');
const success = green(_isUnicodeSupported ? '✔' : '√');
const warning = yellow(_isUnicodeSupported ? '⚠' : '‼');
const error = red(_isUnicodeSupported ? '✖️' : '×');

export {info, success, warning, error};
