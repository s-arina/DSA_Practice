var assert = require('assert');

var aggregateArray = require('../Fundamentals/Aggregate.js').aggregateArray;

describe('aggregate array', function () {
  function testCondition(array, result) {
    it(`aggregates the array and returns the total amount for each individual by id`, function () {
      // deep equal when comparing objects
      assert.deepEqual(aggregateArray(array), result);
    });
  }

  let testCases = [
    [
      [
        {
          id: 1,
          name: 'Sarina',
          amount: 1500,
        },
        {
          id: 2,
          name: 'Nawon',
          amount: 1200,
        },
        {
          id: 3,
          name: 'Cynthia',
          amount: 1750,
        },
        {
          id: 1,
          name: 'Sarina',
          amount: 2100,
        },
        {
          id: 4,
          name: 'Esther',
          amount: 1100,
        },
        {
          id: 2,
          name: 'Nawon',
          amount: 1950,
        },
        {
          id: 4,
          name: 'Esther',
          amount: 1235,
        },
        {
          id: 3,
          name: 'Cynthia',
          amount: 2000,
        },
      ],
      [
        { id: 1, name: 'Sarina', amount: 3600 },
        { id: 2, name: 'Nawon', amount: 3150 },
        { id: 3, name: 'Cynthia', amount: 3750 },
        { id: 4, name: 'Esther', amount: 2335 },
      ],
    ],
  ];

  testCases.forEach((ele) => testCondition(...ele));
});
