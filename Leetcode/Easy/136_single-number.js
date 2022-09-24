// ============================== SINGLE NUMBER ==============================
// ============================== SINGLE NUMBER ==============================

/*
Given a non-empty array of integers nums:
    - every element appears twice except for one
    - find and return that single one
*/

// ===== XOR
// TIME – O(n), SPACE – O(1)

var singleNumberXOR = function (nums) {
  return nums.reduce((a, b) => a ^ b);
};

console.log(singleNumberXOR([2, 2, 1])); // 1
console.log(singleNumberXOR([4, 1, 2, 1, 2])); // 4

// ===== FREQUENCY COUNTER
// TIME – O(n), SPACE – O(n)

var singleNumberFQ = function (nums) {
  const obj = {};

  for (let num of nums) {
    obj[num] = ++obj[num] || 1;
  }

  for (let num in obj) {
    if (obj[num] === 1) {
      return num;
    }
  }
};

console.log(singleNumberFQ([2, 2, 1])); // 1
console.log(singleNumberFQ([4, 1, 2, 1, 2])); // 4
