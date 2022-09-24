// ============================== REMOVE DUPLICATES FROM SORTED ARRAY ==============================
// ============================== REMOVE DUPLICATES FROM SORTED ARRAY ==============================

/* 
Given an integer array nums sorted in non-decreasing order:
    - remove th duplicates IN-PLACE such that each unique element appears only once
    - the relative order of the elements hsould be kept the same
    - the result must be placed in the FIRST PART of the array nums
    - return the amount of unique values in the array

EXAMPLE:

input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
output: 5, nums = [0, 1, 2, 3, 4,_,_,_,_,_]
- the function should return k = 5, which the first give elements being 0, 1, 2, 3, 4 repsectively
- it does not matter what you leave beyond the returned k (hence they are underscores)
*/

// =====
// TIME – O(n), SPACE – O(n)

var removeDuplicates = function (nums) {
  // return the array in place
  // but the unique values should be in the front
  // return the amount of unique values in the array

  if (nums.length <= 1) return nums.length; // only one possible unique val

  let n = 1; // first value is automatically unique

  // loop through the array starting at idx 1 because we will be checking the number before it
  for (let i = 1; i < nums.length; i++) {
    // [1, 1, 2]
    // if the current value is NOT the same as the one before it
    if (nums[i] !== nums[i - 1]) {
      // 2 !== 1

      // nums[1 + 1 = 2] = nums[1];
      // nums[2] = 2, nums[1] = 1
      // 2 = 1
      // [1, 1, 2] => [1, 2, 2]

      // checking backwards
      // replace the current value (the dupe) with the next unique number instead, essentially getting rid of the dupe
      nums[n++] = nums[i];
    }
  }

  // n will be the number of times a unique value was found
  return n;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5, nums = [0, 1, 2, 3, 4]
console.log(removeDuplicates([1, 1, 2])); // 2, nums = [1, 2]
