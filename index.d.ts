import type * as _logSymbols from './symbols.js';

/**
Colored symbols for various log levels.

Includes fallbacks for Windows CMD which only supports a [limited character set](https://en.wikipedia.org/wiki/Code_page_437).

@example
```
import logSymbols from 'log-symbols';

console.log(logSymbols.success, 'Finished successfully!');
// Terminals with Unicode support:     ✔ Finished successfully!
// Terminals without Unicode support:  √ Finished successfully!
```
*/
declare const logSymbols: typeof _logSymbols;

export default logSymbols;
