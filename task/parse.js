module.exports = function Parse(
	parent, // Object
	params // Array
) {
	let prop;
	let i = 0;

	// Using Array.prototype.forEach() will not apply the callback
	// to elements that are appended to, or removed from,
	// the array during execution
	// Source: https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.18
	for (; i < params.length; i += 1) {
		const arg = params[i];

		// Call a function and pass remaining arguments
		if (prop && prop.call && prop.apply) {
			return prop(...params.slice(i));
		}
		// Return strings and arrays
		else if (prop && (Array.isArray(prop) || prop.substring)) {
			console.log(prop);
		}
		// Force the next iteration
		else if ((params.length - 1) === i) {
			// If no argument has been passed
			// run the function without an argument
			params.push('');
		}

		// Dig deeper
		prop = prop
			? prop[arg]
			: parent[arg]
		;
	}
};
