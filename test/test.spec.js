var assert = require('assert');
var add = require('./test.js').add;

describe('add', function () {
  function testCondition(one, two, sum) {
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
  testCases.forEach((ele) => testCondition(...ele));
});
