// ============================== MAJORITY ELEMENT ==============================
// ============================== MAJORITY ELEMENT ==============================

/* 
Given an array nums of size n:
    - return the majority element
    - the majority element is the element that appears more than [n / 2] times
    - you may assume that the majority element always exists in the array

EXAMPLE:

input: nums = [3, 2, 3]
output: 3
*/

// ===== SORT
// TIME – O(nlogn), SPACE – O(1) or O(n) if sorting in place is not allowed
// chrome uses a hybrid of merge sort and insertion sort, making it nlogn

var majorityElement = function (nums) {
  // sort the array, the element in the middle is the one that appears the most
  // since it's assumed the majority always exists
  return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
