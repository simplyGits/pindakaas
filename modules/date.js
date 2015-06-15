(function (module) {
	"use strict";

	var relativeDaysMap = {
		"eergister(en)?": -2,
		"gister(en)?": -1,
		"vandaag": 0,
		"morgen": 1,
		"overmorgen": 2
	};

	var ignoreWords = [
		"om"
	];

	var contains = function (arr, val) {
		return arr.indexOf(val) > -1;
	};

	var addDays = function (date, days) {
		date.setTime(date.getTime() + 1000 * 60 * 60 * 24);
		return date;
	};

	var matchMap = function (str, map) {
		for (var key in relativeDaysMap) {
			var reg = new RegExp("\\b"+key+"\\b", "i");
			if (reg.test(str)) {
				return relativeDaysMap[key];
			}
		}
	};

	module.exports = function (str) {
		var lines = str.replace(/[^\s\w\.\:]/g, "").replace(/\s+(\W)\s+/, "$1").split(".");
		var res = [];

		lines.forEach(function (line) {
			var current = null;
			var currentStart = -1;

			line.split(" ").forEach(function (word, i) {
				var relativeDate = matchMap(word, relativeDaysMap);
				if (relativeDate !== undefined) {
					var now = new Date();

					current = {
						dateDelta: relativeDate,
						hours: now.getHours(),
						minutes: now.getMinutes()
					};
					currentStart = i;
				} else if (current && i - currentStart > 2) {
					res.push(current);
					current = null;
				} else {
					var regResult = /(\d+):(\d+)/.exec(word);
					if (regResult !== null) {
						current.hours = regResult[1];
						current.minutes = regResult[2];

						res.push(current);
						current = null;
					}
				}
			});

			if (current) {
				res.push(current);
			}
		});

		res = res.map(function (val) {
			var date = new Date();
			date.setDate(date.getDate() + val.dateDelta);
			date.setHours(val.hours);
			date.setMinutes(val.minutes);

			return {
				date: date
			};
		});

		return res;
	};

	module.exports.moduleName = 'date';
})(module);
