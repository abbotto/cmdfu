const parse = require('./parse.js');

module.exports = function Export(parent, params) {
	const shellParser = function shellParser(...args) {
		return parse(
			parent,
			args
		);
	};

	return params
		? shellParser(...params)
		: parent
	;
};
