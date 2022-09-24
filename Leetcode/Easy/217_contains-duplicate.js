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
