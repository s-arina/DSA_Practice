// ======================================== BUBBLE SORT

/*
A sorting algorithm where the largest values bubble up to the top.

- checks two numbers against each other to see which is the larger one
- larger gets swapped to the right position
- when it reaches the end, the last number gets locked in
- process repeats again for the rest of the numbers
*/

// ==================== THE IDEA

/*
1. Loop over elements
2. Swap anything out of order
3. Repeat 1-2 until there are no swaps
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

// ==================== METHOD: BUBBLE SORT
// TC – O(n^2) (worst), O(n) (best, already sorted)
// SC – O(1)

function bubbleSort(arr) {
  // a tracking variable to check if a swap was made
  // ensures the function will not run on a sorted array more than once
  let noSwaps;
  // decrement so there's no need to compare against the highest value over and over
  for (let i = arr.length; i > 0; i--) {
    // no swaps are made initially
    noSwaps = true;
    // i-1 shorten the loop each time
    for (let j = 0; j < i - 1; j++) {
      // if the left value is greater than the right
      if (arr[j] > arr[j + 1]) {
        // swap their positions
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // a swap was made
        noSwaps = false;
      }
    }
    // no swaps, stop loop, return array
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([6, 0, 2, 6, -3, -352, 4, 0, -12, 234]));
