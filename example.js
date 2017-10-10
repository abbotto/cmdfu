// Example
// node example.js what time is it '+"%T"'

const fu = require('./index.js');
const sh = require('shellcmd');

const myObject = {
	who: {
		am: {
			i: () => {
				console.log('You are:');
				sh("echo $(whoami)");
			}
		}
	},
	what: {
		time: {
			is: {
				it: (option) => {
					console.log('The time is:');
					sh(`date ${option}`);
				}
			}
		}
	},
	days: {
		of: {
			the: {
				week: [
					'Sunday',
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday'
				]
			}
		}
	}
};

module.exports = fu.export(
	myObject,
	fu.params()
);
