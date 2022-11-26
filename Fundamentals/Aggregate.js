// ======================================== AGGREGATION (WITH REDUCE)

// Given a record of information, aggregate (combine) the total amounts for each individual in one object

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
  return arr.reduce((acc, val) => {
    const index = acc.findIndex((obj) => obj.id === val.id);
    if (index !== -1) {
      acc[index].amount += val.amount;
    } else {
      acc.push({
        id: val.id,
        name: val.name,
        amount: val.amount,
      });
    }
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
