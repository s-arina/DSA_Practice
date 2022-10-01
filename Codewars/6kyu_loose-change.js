// ============================== LOOSE CHANGE ==============================
// ============================== LOOSE CHANGE ==============================

/* 
Given a amount cents:
    - return a dictionary/hash which shows the least amount of coins used to make up that amount
    - the only coin demoniations considered in this exercise are: Pennies / Nickels / Dimes / Quarters

EXAMPLE:

input: 56
output: {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
- the least amount of each coin needed to make the total 

*/

// ===== HASH MAP
// TIME – O(n), SPACE – O(n)
// returning a data structure; hash map

var looseChange = function (arg) {
  let values = { Quarters: 25, Dimes: 10, Nickels: 5, Pennies: 1 };
  let change = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };

  // cents = 56

  // val = 'Quarters', 'Dimes', 'Nickels', 'Pennies'
  for (let val in values) {
    // while cents (56) >= 25 / 10 / 5 / 1
    while (cents >= values[val]) {
      // 56 -= 25 / 10 / 5 / 1

      // 56 >= 25, so 56 - 25 - 25 = 6, 2 Quarters

      // keep subtracting until cents is LESS than the value, then move onto the next amount to check

      // 6 >= 10, false, 0 Dimes

      // 6 >= 5, so 6 - 5 = 1, 1 Nickel

      // 1 >= 1, so 1 - 1 = 0, 1 Penny
      cents -= values[val];

      // change object values will get incremented for each successful subtraction
      // 'Quarters': 2
      // 'Nickels': 1
      // 'Pennies': 1
      change[val]++;
    }
  }

  // {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2};
  return change;
};

console.log(looseChange(56)); // {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
console.log(looseChange(-435)); // {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
console.log(looseChange(4.935)); // {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}
