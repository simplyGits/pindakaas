/**
 * A Dutch natural language parser written in JavaScript.
 * @author simply
 * @module pindakaas
 */

(function (module) {
	"use strict";

	var modules = [];
	modules.push(require("./modules/date.js"));

	/**
	 * Parses the given `str`.
	 * @method pindakaas
	 * @param str {String} The string to parse.
	 * @param [options] {Object}
	 * 	@param [options.excludeModules] {String[]} Name of modules to exclude.
	 * @return {Object[]} Parse result.
	 */
	module.exports = function (str, options) {
		var result = [];

		for (var i = 0; i < modules.length; i++) {
			var module = modules[i];
			if (modules.indexOf(module.name) === -1) continue;

			// Run module with `str` and push result.
		}

		return result;
	};
})(module);
