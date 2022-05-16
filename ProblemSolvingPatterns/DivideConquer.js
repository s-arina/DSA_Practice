// ============================================================ FREQUENCY COUNTERS

/*
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can tremendously decrease time complexity.

Usually for larger, more complex things like sorting a really long list of data.
*/

// ==================== THE IDEA

/*
Say there is a larger set of data (usually an array/string/linked list/tree/etc.)

If we're searching for a value:
    - rather than starting from the LEFT and moving all the way to the RIGHT
    - we start by DIVIDING it into smaller pieces
    - then doing something to each smaller piece to determine where to go next
*/

// ============================================================ EXAMPLES

// ======================================== BINARY SEARCH

/*
Given a sorted array of integers and a value:
  - return the index where the value passed to the function is located
*/

// ==================== METHOD: DIVIDE & CONQUER
// TC – O(log n) (worst), O(1) (best)
// SC – O(1)

function binarySearch1(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // find the middle element of the array each iteration
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === val) {
      // return the middle if its the value passed
      return middle;
    } else if (arr[middle] < val) {
      // search the left half if the middle is less than the value
      start = middle + 1;
    } else {
      // search the right half if the middle is greater than the value
      end = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch1([1, 2, 3, 4, 5, 6], 6)); // 5

// ==================== ALT VERSION

function binarySearch2(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] === val) {
    return middle;
  } else {
    return -1;
  }
}

console.log(binarySearch2([1, 2, 3, 4, 5, 6], 6)); // 5
