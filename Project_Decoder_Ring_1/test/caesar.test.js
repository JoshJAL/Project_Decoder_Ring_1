// Write your tests here!
const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    it("Should return false.", () => {
        const actual = caesar("Something", 26, true);
        expect(actual).to.be.false;
    });
    it("Should encode messgaes properly, ignoring spaces and special characters.", () => {
        const actual = caesar("This should work!", 3, true);
        expected = "wklv vkrxog zrun!";
        expect(actual).to.equal(expected);
    });
    it("Should decode messages properly, ignoring spaces and special characters.", () => {
        const actual = caesar("wklv vkrxog zrun!", 3, false);
        expected = "this should work!";
        expect(actual).to.equal(expected);
    });
    it("Should wrap around the alphabet if necessary.", () => {
        const actual = caesar("z", 1, true);
        expected = "a";
        expect(actual).to.equal(expected);
    });
    it("Should allow for negative shift", () => {
        const actual = caesar("This should work", -3, true);
        expected = "qefp pelria tloh";
        expect(actual).to.equal(expected);
    })
})