// ============================== PROBLEMS ==============================

/*
    - Contains Duplicate
    - Missing Number
    - All Missing Numbers
    - Single Number
    - Climbing Stairs
    - Maximum Subarray
    - Counting Bits
    - Range Sum Query - Immutable
*/

// ============================== CONTAINS DUPLICATE ==============================
// ============================== CONTAINS DUPLICATE ==============================

/* 
Given an integer array nums:
    - return true if any value appears at least twice in the array 
    - return false if every element is distinct
*/

// ===== NEW SET
// TIME – O(n), SPACE – O(n)

var containsDuplicateSet = function (nums) {
  // compare size/length, equal means new set didnt remove anything
  return new Set(nums).size !== nums.length;
};

console.log(containsDuplicateSet([1, 2, 3, 1])); // true
console.log(containsDuplicateSet([1, 2, 3, 4])); // false

// ===== HASH TABLE / MAP
// TIME – O(n), SPACE – O(n)

var areThereDuplicatesMap = function (nums) {
  // create a new hashmap with all the items in the array
  // duplicates will automatically be removed
  const map = new Map(nums.map((i) => [i]));
  return map.size !== nums.length;
};

console.log(areThereDuplicatesMap([1, 2, 3, 3, 4, 5])); // true
console.log(areThereDuplicatesMap([1, 2, 3, 4, 5])); // false

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

// ============================== CLIMBING STAIRS ==============================
// ============================== CLIMBING STAIRS ==============================

/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. 
    - In how many distinct ways can you climb to the top?
*/

// ===== TWO POINTERS
// TIME – O(n), SPACE – O(1)
var climbStairs = function (n) {
  let step2Before = 1;
  let step1Before = 1;
  for (let i = 2; i <= n; i++) {
    let tmp = step1Before; // temp = 1 // temp = 2
    step1Before = step2Before + step1Before; // step1 = 1 + 1 = 2 // step1 = 1 + 2 = 3
    step2Before = tmp; //  step2 = 1 (first iteration) // step2 = 2
    // loop done, because i <= n (3)
    // if n > 0, return step1, 3, else 0
  }
  return n > 0 ? step1Before : 0;
};

console.log(climbStairs(3)); // 3
console.log(climbStairs(6)); // 13

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
  // infinity because the sum can be negative
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

// ============================== COUNTING BITS ==============================
// ============================== COUNTING BITS ==============================

/*
Given an integer n:
    - return an array of length n + 1 such that for each i (0 <= i <= n),
    - array[i] is the number of 1's in the binary representation of i
*/

// ===== FOR LOOP
// TIME – O(n), SPACE – O(n)

var countBits = function (num) {
  let bits = [];
  // loop through n amount of times
  for (let i = 0; i <= num; i++) {
    // convert each i to it's binary form and remove the 0's
    // push the amount of 1's (length) into the arrary
    bits.push(i.toString(2).replace(/0/g, '').length);
  }
  return bits;
};

console.log(countBits(2)); // 0 -> 0 // 1 -> 1 // 2 -> 10 -----> [0, 1, 1]
console.log(countBits(5)); // [0, 1, 1, 2, 1, 2]

// ============================== RANGE SUM QUERY - IMMUTABLE ==============================
// ============================== RANGE SUM QUERY - IMMUTABLE ==============================

/* 
Given an integer array nums, handle multiple queries of the following type:
    - calculate the sum of the elements of nums between indices left and right (inclusive)

Implement the NumArray class:
    - initialized the object with the interger array nums
    - returns the sum of the elements of nums between indices left and right (inclusive)

*/

// ===== NEW SET
// TIME – O(n), SPACE – O(n)

function NumArray(nums) {
  // initialize an empty array to store all possible sums of the numbers within the given array, with a length of nums + 1 with the starting value as 0
  this.runningTotal = [0];

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

    this.runningTotal[i + 1] = nums[i] + this.runningTotal[i];
    // [0, 5, 11, 18, 26]

    // this is only done one time
  }
}

NumArray.prototype.sumRange = function (left, right) {
  return this.runningTotal[right + 1] - this.runningTotal[right];
};
