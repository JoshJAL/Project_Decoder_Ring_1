// Write your tests here!
const {polybius} = require("../src/polybius");
const expect = require("chai").expect;

const decoder = { "11": "a", "21": "b", "31": "c", "41": "d", "51": "e", "12": "f", "22": "g", "32": "h", "42": "i/j", "52": "k",
                 "13": "l", "23": "m", "33": "n", "43": "o", "53": "p", "14": "q", "24": "r", "34": "s", "44": "t", "54": "u",
                 "15": "v", "25": "w", "35": "x", "45": "y", "55": "z" };
const encoder = { 'a': '11', 'b': '12', 'c': '13', 'd': '14', 'e': '15', 'f': '21', 'g': '22', 'h': '23', 'i/j': '24', 'k': '25', 'l': '31', 'm': '32', 'n': '33', 'o': '34', 'p': '35', 'q': '41', 'r': '42', 's': '43', 't': '44', 'u': '45', 'v': '51', 'w': '52', 'x': '53', 'y': '54', 'z': '55' };

describe("polybius", () => {
  it("Output should be a string and should maintain spaces. 'I' and 'J' should both return 42.", () => {
    const actual = polybius("Josh Levine", true);
    expected = "42433432 135115423351";
    expect(actual).to.equal(expected);
  });
  it("Should return false if, when decoding, the number of characters in a string is odd.", () => {
    const actual = polybius("1 23", false);
    expect(actual).to.be.false;
  });
  it("Should somehow show I and J when decoding messages.", () => {
    const actual = polybius("42433432 135115423351", false);
    expected = "(i/j)osh lev(i/j)ne";
    expect(actual).to.equal(expected);
  });
})