// ======================================== INSERTION SORT

/*
A sorting algorithm that builds up the sort by gradually creating a larger left half which is already sorted.

Useful if:
 - your data is an online algorithm (an algorithm that can work as data is coming in / as it receives new data)

*/

// ==================== THE IDEA

/*
- start by picking the second element in the array
- compare it to the value before it
- swap the larger number to the right if necessary
- continue to the next element
- if it's in the incorrect order, iterate through the sorted portion to place the element in the correct place
*/

// ==================== TIME COMPLEXITY

/*
- Best: O(n)
- Average/Worst : O(n^2) – nested loop, going over n elements in the array n times
*/

// ============================================================ EXAMPLES

/*
Given an array of numbers:
 - sort them from lowest to highest
*/

// ==================== METHOD: INSERTION SORT
// TC – O(n^2) (worst), O(n) (best, already/nearly sorted)
// SC – O(1)

function insertionSort(arr) {
  // start with second element to compare with the one behind it
  for (let i = 1; i < arr.length; i++) {
    // iterate backwards to loop towards the beginning
    // set j = i, to compare it to the value behind it later (j-1)
    for (let j = i; j >= 0; j--) {
      // compare to value behind
      if (arr[j] < arr[j - 1]) {
        // if less than, swap the larger number to the right
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(insertionSort([2, 513, -23, 125, 92, 34, -12, -74]));
