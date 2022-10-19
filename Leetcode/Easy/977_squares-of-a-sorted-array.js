// ============================== SQUARES OF A SORTED ARRAY ==============================
// ============================== SQUARES OF A SORTED ARRAY ==============================

/* 
Given an integer array nums sorted in non-decreasing order:
    - return an array of the squares of each number sorted in non-decreasing order

EXAMPLE:

input: nums = [-4, -1, 0, 3, 10]
output: [0, 1, 9, 16, 100]
- after squaring, the array becomes [16, 1, 0, 9, 100]
- after sorting, the array becomes [0, 1, 9, 16, 100]
*/

// ===== TWO POINTERS
// TIME – O(n), SPACE – O(n)

var sortedSquares = function (nums) {
  let arr = [];
  // two pointers
  let start = 0;
  let end = nums.length - 1;
  // keep track of the last index position of the array
  let lastIdx = end;

  while (start <= end) {
    // Math.abs(-4) > Math.abs(10) ? NO
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      arr[lastIdx--] = nums[start] * nums[start];
      // the current number is now placed properly in the new array
      // move the pointer up to compare the next number instead
      start++;
    } else {
      // arr[5] = 10 * 10 = 100
      // we need to start at the last index first, so post-decrement
      // in the next loop, the lastIdx will be 4 and so on
      arr[lastIdx--] = nums[end] * nums[end];
      // the current number is now placed properly in the new array
      // move the pointer down to compare the next number
      end--;
    }
  }
  // return the final array that's now been sorted
  return arr;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0, 1, 9, 16, 100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4, 9, 9, 49, 121]

/*
IDEA:
    - every number becomes positive when squared
    - since the array is already sorted:
    - there's a chance the smallest number (before squaring) will be greater than the largest number (after squaring)
    - if that's the case, it will need to be the last number in the new array

NOTE:
    - let lastIdx = 5
    - ++lastIdx => 6, pre-increment, increments ahead of time and returns it
    - lastIdx++ => 5, post-increment, increments ahead but returns the current
*/
