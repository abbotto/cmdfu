# Command-line options parser for NodeJS functions


## Package Information
[![NPM version](https://badge.fury.io/js/cmdfu.svg)](http://badge.fury.io/js/cmdfu)
[![GitHub version](https://badge.fury.io/gh/abbotto%2Fcmdfu.svg)](https://badge.fury.io/gh/abbotto%2Fcmdfu)

## Usage

Write flexible scripts that can be called in multiple ways:

	const fu = require('cmdfu');
	const sh = require('shellcmd');
	const myObject = { who: { am: {}}};
	
	myObject.who.am.i = () => {
		console.log('You are:');
		sh('whoami');
	};

	module.exports = fu.export(
		myObject,
		fu.params()
	);
	
The above example can be run from another script...

	require('myScript').who.am.i();

... and it can also be run in the terminal

	node myScript.js who am i
