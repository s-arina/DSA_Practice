// ============================== MAXIMUM SUBARRAY ==============================
// ============================== MAXUMIM SUBARRAY ==============================

/*
Given an integer array nums: 
    - find the contiguous subarray (containing at least one number) which has the largest sum
    - return its sum

A subarray is a contiguous part of an array.
*/

// ===== TWO POINTERS
// TIME – O(n), SPACE – O(1)

var maximumSubarray = function (nums) {
  // initial maxSum is infinity because the sum can be negative
  let maxSum = -Infinity;
  let tempSum = 0;

  for (let i = 0; i < nums.length; i++) {
    // compare the current number with the cumulating sum, store the highest as tempSum
    tempSum = Math.max(nums[i], tempSum + nums[i]);

    // compare the tempSum to the maxSum until the highest sum is stored and return it
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // [4,-1,2,1] = 6, largest sum
console.log(maximumSubarray([-1])); // -1
