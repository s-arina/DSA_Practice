// ============================== TWO SUM ==============================
// ============================== TWO SUM ==============================

/*
Given an array of integers (sorted or unsorted) and a target:
  - return the first two values where the sum is the target
OR
  - return a boolean if two values sum to the target
OR
  - return the indices of both values
*/

/*
STEPS:
        1) create a map
        2) loop through array
        3) track the current element
        4) track the difference b/t the target and current element
        5) does the difference exist in the map?
        5a) if yes, return it's value in the map (map[diff]), along with the current index the loop is at (i)
        5b) if no, set the current element in the map with its index position (map[curr] = i)
*/

// ===== HASH MAP (OBJECT)
// TIME – O(n), SPACE – O(n)

function twoSumHashMap(arr, target) {
  let hashMap = {};

  // [1, 2, 3, 4, 5, 6], 10
  for (let i = 0; i < arr.length; i++) {
    // current element
    let curr = arr[i];
    // difference from target
    let diff = target - curr;
    // i = 0, 10 - 1 =  9 in hashMap ? No, add, keep going
    // i = 1, 10 - 2 =  8 in hashMap ? No
    // i = 2, 10 - 3 =  7 in hashMap ? No
    // i = 3, 10 - 4 =  6 in hashMap ? No
    // i = 4, 10 - 5 =  5 in hashMap ? No
    // i = 5, 10 - 6 =  4 in hashMap ? Yes

    // if the difference exists in the hashMap
    if (diff in hashMap) {
      // return hashMap[10 - 6 = 4, index 3 in hashMap], index 5
      // return the index position of the difference in the hashMap, and the current index the loop is at
      // [3, 5]
      // return [diff, curr] for VALUES instead of indices
      return [hashMap[diff], i];
    } else {
      // doesn't exist? set it in the map with its index position
      // element : index
      // { 1:0, 2:1, 3:2, 4:3, 5:4 }
      hashMap[curr] = i;
    }
  }
  return [];
}

console.log(twoSumHashMap([1, 2, 3, 4, 5, 6], 10)); // indicies: [3, 5]
console.log(twoSumHashMap([1, 2, 3, 4, 5, 6], 20)); // []
console.log(twoSumHashMap([3, 2, 4], 6)); // [1, 2]
