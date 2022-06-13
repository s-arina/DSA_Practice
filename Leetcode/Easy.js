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
// TIME – O(n), SPACE – O(1)

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

// ============================== MISSING NUMBER ==============================
// ============================== MISSING NUMBER ==============================
