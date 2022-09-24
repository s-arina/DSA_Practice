// ============================== ALL MISSING NUMBERS ==============================
// ============================== ALL MISSING NUMBERS ==============================

/*
Given an array nums of n integers where nums[i] is in the range [1, n]:
    - return an array of all the integers in the range [1, n] that do not appear in nums
*/

// ===== NEW SET
// TIME – O(n), SPACE – O(n)

var allMissingNumbers = function (nums) {
  const set = new Set();

  // create a set of numbers from 1 to length of the input array
  for (let i = 1; i <= nums.length; i++) {
    set.add(i);
  }

  // loop through the array and delete any number that appears in the set
  for (let num of nums) {
    set.delete(num);
  }
  // return the rest of the numbers from the set, those are the missing ones
  return [...set];
};

console.log(allMissingNumbers([1, 2, 4, 6, 7, 8, 9])); // [3, 5]
console.log(allMissingNumbers([1, 1])); // 2
