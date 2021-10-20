// Write your tests here!
const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    it("Should return false.", () => {
        const actual = caesar("", -26, true);
        expect(actual).to.be.false;
    })
})
