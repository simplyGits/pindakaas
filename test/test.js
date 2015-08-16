var expect = require("chai").expect;
var pindakaas = require("../");

describe("pindakaas", function () {
	"use strict";

	it("should expose a function", function () {
		expect(pindakaas).to.be.a("function");
	});

	describe("dates", function () {
		it("should parse relative dates without a time", function () {
			var result = pindakaas('overmorgen');
			var expected = new Date();
			expected.setDate(new Date().getDate() + 2);

			expect(result).to.be.an("array");
			expect(result[0].date).to.be.a("date");
			// Check parse result with a slight room for error.
			expect(result[0].date.getTime() - expected.getTime() < 10000).to.be.true;

		});
		it("should parse relative dates with a time", function () {
			var result = pindakaas('gister 15:41');
			var expected = new Date();
			expected.setDate(new Date().getDate() - 1);
			expected.setHours("15");
			expected.setMinutes("41");

			expect(result).to.be.an("array");
			expect(result[0].date).to.be.a("date");
			// Check parse result with a slight room for error.
			expect(result[0].date.getTime() - expected.getTime() < 10000).to.be.true;
		});
	})
});
