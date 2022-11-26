// ======================================== AGGREGATION (WITH REDUCE)

// Given a record of information, aggregate (combine) the total amounts for each individual in one object
// GOAL: get the sum of each persons amounts

const transactions = [
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
];

function aggregateArray(arr) {
  // reduce defines an initialValue as an empty array at the end []
  // go through the given array
  // acc = [], val = first obj in arr
  return arr.reduce((acc, val) => {
    // find if the first obj exists in the acc (by checking if their ids exist/match)
    const index = acc.findIndex((obj) => obj.id === val.id);
    // if it exists, increment the amount in the acc with the amount in the given array
    // to the persons id
    if (index !== -1) {
      acc[index].amount += val.amount;
    } else {
      // else if it doesn't exist, it returns -1
      // create/push a new object in the acc with the values from the object in the given array
      acc.push({
        id: val.id,
        name: val.name,
        amount: val.amount,
      });
    }
    // return the complete array at the end with accumulated values for each individual
    return acc;
  }, []);
}

// console.log(aggregateArray(transactions));

/*
  OUTPUT:
  [
      {id: 1, name: "Sarina", amount: 3600}, 
      {id: 2, name: "Nawon", amount: 3150}, 
      {id: 3, name: "Cynthia", amount: 3750}, 
      {id: 4, name: "Esther", amount: 2335}
  ]
  */

exports.aggregateArray = aggregateArray;

console.log(
  [
    {
      amount: 3600,
      id: 1,
      name: 'Sarina',
    },
    {
      amount: 3150,
      id: 2,
      name: 'Nawon',
    },
    {
      amount: 3750,
      id: 3,
      name: 'Cynthia',
    },
    {
      amount: 2335,
      id: 4,
      name: 'Esther',
    },
  ] ==
    [
      {
        amount: 3600,
        id: 1,
        name: 'Sarina',
      },
      {
        amount: 3150,
        id: 2,
        name: 'Nawon',
      },
      {
        amount: 3750,
        id: 3,
        name: 'Cynthia',
      },
      {
        amount: 2335,
        id: 4,
        name: 'Esther',
      },
    ]
);
