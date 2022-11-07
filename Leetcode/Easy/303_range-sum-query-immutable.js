// ============================== RANGE SUM QUERY - IMMUTABLE ==============================
// ============================== RANGE SUM QUERY - IMMUTABLE ==============================

/* 
Given an integer array nums, handle multiple queries of the following type:
    - calculate the sum of the elements of nums between indices left and right (inclusive)

Implement the NumArray class:
    - initializes the object with the integer array nums
    - returns the sum of the elements of nums between indices left and right (inclusive)


EXAMPLE:

input: numArray = new NumArray([-2, 0, 3, -5, 2, -1])
> numArray.sumRange(0, 2)
> (-2) + 0 + 3 = 1
output: 1

- the idea is given an array, create a class function that will:
- take two index positions and sum the numbers in the array at those positions
- in function NumArray, loop through array to create another array with all possible accumulated sums
- in class function, just subtract the two indexes from each other to find the already summed number within the array
*/

// =====
// TIME – O(n), SPACE – O(n)

function NumArray(nums) {
  // initialize an empty array to store all possible sums of the numbers within the given array
  // with a length of nums + 1 with the starting value as 0
  this.sums = [0];

  for (let i = 0; i < nums.length; i++) {
    // setting each following number in the array after 0
    // to be the sum of each element in nums array + the element before it

    // first loop:
    // [0, _] = [5, 6, 7, 8] + [0, _]
    //     ^     ^              ^
    // _ = 5 + 0 = 5

    // second loop:
    // [0, 5, _] = [5, 6, 7, 8] + [5]
    //        ^        ^           ^
    // _ = 6 + 5 = 11

    // third loop:
    // [0, 5, 11, _] = [5, 6, 7, 8] + [11]
    //            ^           ^        ^
    // _ = 7 + 11 = 18 ... so on

    this.sums[i + 1] = nums[i] + this.sums[i];
    // [0, 5, 11, 18, 26]
  }
}

NumArray.prototype.sumRange = function (left, right) {
  // nums = [5, 6, 7, 8]
  // this.sums = [0, 5, 11, 18, 26]
  // 0 is needed at the beginning because of inclusive indicies

  // INDICES: (0, 2) -> sum of 5, 6, 7
  // this.sums[right + 1] => this.sums[2 + 1 = 3] => 18
  // this.sums[left] => 0
  // 18 - 0 = 18, sum of 5, 6, 7

  // INDICES: (0, 3) -> sum of [5, 6, 7, 8]
  // this.sums[right + 1] => this.sums[3 + 1 = 4] => 26
  // this.sums[left] => 0
  // 26 - 0 = 26, sum of 5, 6, 7, 8

  return this.sums[right + 1] - this.sums[left];
};

let arr = new NumArray([5, 6, 7, 8]);
console.log(arr.sumRange(0, 2)); // 18
console.log(arr.sumRange(0, 3)); // 26
