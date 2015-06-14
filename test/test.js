var expect = require("chai").expect;
var pindakaas = require("../");

describe("pindakaas", function () {
	"use strict";

	it("should expose an function", function () {
		expect(pindakaas).to.be.a("function");
	});
});
