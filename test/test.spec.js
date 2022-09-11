// edit launch.json to configure mocha testing

var assert = require('assert');
// built in
var add = require('./test.js').add;
// import the function to test

describe('add', function () {
  function testCondition(one, two, sum) {
    // write out the description in the console
    it(`adds two parameters, ${one}, ${two} and returns ${sum}`, function () {
      assert.equal(add(one, two), sum);
    });
  }
  let testCases = [
    [1, 2, 3],
    [0, 1000, 1000],
    [2, -39, -37],
    [99, 100, 199],
    [-100, 100, 0],
    [-1000, -1000, -2000],
  ];

  // apply the description to all test cases
  testCases.forEach((ele) => testCondition(...ele));
});
