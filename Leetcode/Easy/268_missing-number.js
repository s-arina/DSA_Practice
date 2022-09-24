// ============================== MISSING NUMBER ==============================
// ============================== MISSING NUMBER ==============================

/*
Given an array nums containing n distinct numbers in the range [0, n]:
    - return the only number in the range that is missing from the array
*/

// ===== REDUCE
// TIME – O(n), SPACE – O(1)

var missingNumberReduce = function (nums) {
  const totalSum = (nums.length * (nums.length + 1)) / 2;
  const numSum = nums.reduce((a, b) => a + b, 0);

  return totalSum - numSum;
};

console.log(missingNumberReduce([3, 0, 1])); // 2
console.log(missingNumberReduce([1, 2, 3, 4, 5])); // 0
