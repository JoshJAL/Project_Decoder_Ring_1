// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift === 0 || shift < -25 || shift > 25) {
      return false;
    } else if (encode === true && shift < 0) {
      return input.toLowerCase().replace(/[a-z]/g, (whatever) => String.fromCharCode((whatever.charCodeAt(0) - 97 + 26 + shift) % 26 + 97));
    } else if (encode === true) {
      return input.toLowerCase().replace(/[a-z]/g, (whatever) => String.fromCharCode((whatever.charCodeAt(0) - 97 + shift) % 26 + 97));
    } else if (encode === false) {
      return input.toLowerCase().replace(/[a-z]/g, (whatever) => String.fromCharCode((whatever.charCodeAt(0) - 97 + 26 - shift) % 26 + 97));
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
