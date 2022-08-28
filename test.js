// =====

// are there dupes?
// time o(n), space o(1)

function dupe(nums) {
  return new Set(nums).size !== nums.length;
}

console.log(dupe([1, 2, 3, 1])); // true
console.log(dupe([1, 2, 3, 4])); // false

// =====

// find the missing number from 0 to n
// time o(n), space o(1)

function missing(nums) {
  const total = (nums.length * (nums.length + 1)) / 2;
  const numsTotal = nums.reduce((a, b) => a + b);

  return total - numsTotal;
}

console.log(missing([3, 0, 1])); // 2
console.log(missing([0, 1])); // 2

// =====

// find all missing numbers in the array from 1 to n
// time o(n), space o(n) - creating a data structure (Set)

function allMissing(nums) {
  let set = new Set();

  for (let i = 1; i <= nums.length; i++) {
    set.add(i);
  }

  for (let num of nums) {
    set.delete(num);
  }

  return [...set];
}

console.log(allMissing([1, 2, 3, 4, 7, 8, 9])); // [5, 6]
console.log(allMissing([1, 1])); // 2

// =====

// find the integer that appears only once in an array
// time o(n), space o(1)

function singleNum(nums) {
  return nums.reduce((a, b) => a ^ b);
}

console.log(singleNum([2, 2, 1])); // 1
console.log(singleNum([4, 1, 2, 1, 2])); // 4

// =====

// it takes n steps to reach the top of a staircase
// how many ways can you climb it? (climbing 1 or 2 at a time)

function climb(n) {}

console.log(climb(2)); // 2 (1 step + 1 step, 2 steps === 2 ways)
console.log(climb(3)); // 3 (1 + 1 + 1, 1 + 2, 2 + 1)

// =====

// best time to buy/sell stock
// time o(n), space o(1)

function maxProfit(prices) {
  // two pointers
  let max = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    // find the min
    min = Math.min(min, prices[i]);
    // find the highest difference using min
    max = Math.max(max, prices[i] - min);
  }

  return max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0

// =====

// counting bits
// given a number, return array with numbers 0 to n with the amount of 1s in their binary form
// time o(n), space o(n) - creating a data structure (array)

function bits(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    // remove all the 0s, get the number of 1s
    arr.push(i.toString(2).replace(/0/g, '').length);
  }
  return arr;
}

console.log(bits(2)); // [0, 1, 1]
console.log(bits(5)); // [0, 1, 1, 2, 1, 2]

// =====

// two sum
// find if there are two numbers that sum to a target
// time o(n), space o(n) - creating a data structure (object)

function twoSum(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    // target - element = x
    if (target - nums[i] in map) {
      // if x exists in array, return its index position in the map, and the current element index
      return [
        'values:',
        target - nums[i],
        nums[i],
        'indices:',
        map[target - nums[i]],
        i,
        'target:',
        target,
      ];
    } else {
      // else set the element in the map with its position
      map[nums[i]] = i;
    }
  }
  return [];
}

console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([24, 5, 7, 12, 25, 26], 50)); // [0, 1]
