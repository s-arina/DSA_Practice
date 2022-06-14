// ============================== CONTAINS DUPLICATE ==============================
// ============================== CONTAINS DUPLICATE ==============================

// ===== NEW SET
// TIME – O(n), SPACE – O(1)

var containsDuplicateSet = function (nums) {
  return new Set(nums).size !== nums.length;
};

console.log(containsDuplicateSet([1, 2, 3, 1])); // true
console.log(containsDuplicateSet([1, 2, 3, 4])); // false

// ===== FREQUENCY COUNTER
// TIME – O(n), SPACE – O(1)

var areThereDuplicatesFQ = function () {
  let arr = [...arguments];
  if (arr.length === 0) return false;

  let count = {};

  for (let val of arr) {
    count[val] = ++count[val] || 1;
  }

  for (let key in count) {
    if (count[key] > 1) {
      return true;
    }
  }
  return false;
};

console.log(areThereDuplicatesFQ(2, 2, 3)); // true
console.log(areThereDuplicatesFQ(1, 2, 3)); // false

// ===== HASH TABLE / MAP
// TIME – O(n), SPACE – O(n)

var areThereDuplicatesMap = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) return true;
    map.set(nums[i], true);
  }
  return false;
};

console.log(areThereDuplicatesMap([1, 2, 3, 3, 4, 5]));

// ============================== MISSING NUMBER ==============================
// ============================== MISSING NUMBER ==============================

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

// ===== NEW SET
// TIME – O(n), SPACE – O(n)

var allMissingNumbers = function (nums) {
  // create a set of numbers from 1 to n
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    // adding one number ahead each time
    set.add(i + 1);
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
