// ============================== BEST TIME TO BUY & SELL STOCK ==============================
// ============================== BEST TIME TO BUY & SELL STOCK ==============================

/* 
Given an array:
    - choose a single day to buy and a different day in the future to sell
    - find the maximum profit you can achieve by doing so
    - if you cannot achieve any profit, return 0
*/

// ===== TWO POINTERS
// TIME – O(n), SPACE – O(1)

function maxProfit(prices) {
  let maxProfit = 0; // current highest profit
  let min = prices[0]; // current lowest price

  for (let i = 1; i < prices.length; i++) {
    // start at index = 1, 0 is already accounted for as current min

    // loop through the array, find the min
    // compare the first element to the one after, get the smaller
    min = Math.min(prices[i], min);
    // i = 1, min = Math.min(1, 7) => 1
    // i = 2, min = Math.min(5, 1) => 1
    // i = 3, min = Math.min(3, 1) => 1
    // i = 4, min = Math.min(6, 1) => 1
    // i = 5, min = Math.min(4, 1) => 1

    // min is found, 1

    // update the max profit in the same loop
    // compare the current highest profit to the difference of each element minus the min
    // whichever is the largest number gets set to the max profit
    maxProfit = Math.max(maxProfit, prices[i] - min);
    // i = 1, Math.max(0, 1 - 1 = 0) => 0
    // i = 2, Math.max(0, 5 - 1 = 4) => 4 new max
    // i = 3, Math.max(4, 3 - 1 = 2) => 4
    // i = 4, Math.max(4, 6 - 1 = 5) => 5 new max
    // i = 5, Math.max(5, 4 - 1 = 3) => 5
  }
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
