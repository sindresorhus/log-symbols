declare const logSymbols: {
	readonly info: string;

	/**
	@example
	```
	import logSymbols = require('log-symbols');

	console.log(logSymbols.success, 'Finished successfully!');
	// On good OSes:  ✔ Finished successfully!
	// On Windows:    √ Finished successfully!
	```
	*/
	readonly success: string;

	readonly warning: string;

	readonly error: string;
};

export = logSymbols;
