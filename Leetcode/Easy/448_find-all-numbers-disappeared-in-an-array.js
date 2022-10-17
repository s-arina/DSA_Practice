// ============================== ALL MISSING NUMBERS ==============================
// ============================== ALL MISSING NUMBERS ==============================

/*
Given an array nums of n integers where nums[i] is in the range [1, n]:
    - return an array of all the integers in the range [1, n] that do not appear in nums

FOLLOW UP:   
    - can you do this with O(n) runtime and O(1) space? 
    - assume the returned list does not count as extra space
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

// ===== INDICIES (BETTER MEMORY)
// TIME – O(n), SPACE – O(1)
// refer to follow up: you're always going to need to return an array
// so assume the returned one does not count as extra space (it is largely unchanged anyway, just the same values but negated)

/*
- the idea is that the array is as long as the numbers we want in there (1 to n)
- we can work with the values in the array, as well as their indicies

EX:
- [1,4,2,2] - values
- [0,1,2,3] - indicies

- [1,4,2,2]
- subtract 1 from all the values so they match with indices (starting from 0)
- [0,3,1,1] - use these as indices
- now check what number is at each of those indicies, and mark it negative

- 1 - 1 = 0, value at index 0 is 1, mark it neg => -1 => [-1, 4, 2, 2]
- 4 - 1 = 3, value at index 3 is 2, mark it neg => -2 => [-1, 4, 2, -2]
- 2 - 1 = 1, value at index 1 is 4, mark it neg => -4 => [-1, -4, 2, -2]
- Math.abs(-2) - 1 = 1, value at index 1 is 4, mark it as neg => -4 => [-1, -4 ,2 ,-2]

- loop over the new array [-1, -4, 2, -2]
- 2 is not negative, and its index is 2
- add 1 to the index, 2 + 1 = 3, the missing number
- any number that is not negative at the end are missing numbers, add 1 to their index
- push them into a new array and return it
*/

var allMissingNumbersIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    // subtract 1 from all the values to get indicies to use
    let j = Math.abs(nums[i]) - 1;
    // mark the numbers that exist at the indicies as negative
    // Math.abs is to reuse the index in the case it was already marked, so it is needed back at a positive state
    nums[j] = Math.abs(nums[j]) * -1;
  }

  let res = [];

  // loop through the numbers again
  for (let i = 0; i < nums.length; i++) {
    // if a number at an index is positive, add 1 to the index to get the missing number that should be there
    if (nums[i] > 0) {
      // push it into the array
      res.push(i + 1);
    }
  }
  // return the array of missing numbers
  return res;
};

console.log(allMissingNumbersIndex([1, 2, 4, 6, 7, 8, 9])); // [3, 5]
console.log(allMissingNumbersIndex([1, 1])); // 2
