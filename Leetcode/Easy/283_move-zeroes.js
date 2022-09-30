// ============================== MOVE ZEROES ==============================
// ============================== MOVE ZEROES ==============================

/* 
Given an integer array nums:
    - move all 0's to the end of it while maintaining the relative order of the non-zero elements

You must do this in-place without making a copy of the array.

EXAMPLE:

input: nums = [0,1,0,3,12]
output: [1,3,12,0,0]

*/

// ===== COUNTER
// TIME – O(n * m), SPACE – O(1)
// looping over the length of the initial array
// looping over the array starting from count

var moveZeroes = function (nums) {
  let count = 0;

  // [1,2,0,1,0,1,0,3,0,1]

  // loop through the nums
  for (let i = 0; i < nums.length; i++) {
    // when a non-zero value is found
    if (nums[i] !== 0) {
      // move its position to the left by 1 (replacing the 0)
      // essentially shifting all non-zero values to the left
      nums[count++] = nums[i];
    }
  }

  // [1,2,1,1,3,1,0,3,0,1]

  // loop through the nums starting from count
  // (count is the number of times a non-zero value was found)
  for (let i = count; i < nums.length; i++) {
    // set each remaining element at the end to 0 (bringing back the ones that were replaced)
    nums[i] = 0;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1,2,1,1,3,1,0,0,0,0]
