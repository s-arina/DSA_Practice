// ======================================== BINARY SEARCH

/*
Binary search is a much faster form of search.

Rather than eliminating one element at the time, you can eliminate half of the remaining elements at a time.

Binary search only works on SORTED arrays.

It uses the divide and conquer method.
*/

// ==================== TIME COMPLEXITY

/*
- O(log n) – worst/average case (but still just as good as O(1))
- O(1) – best case if the element is the first thing we search for
*/

// ============================================================ EXAMPLES

/*
Given an array and a value:
    - return the index position of the value if it exists
*/

// ==================== METHOD: Multiple Pointers

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
