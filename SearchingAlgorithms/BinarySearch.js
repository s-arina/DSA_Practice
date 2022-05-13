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

function BinarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  // while the mid is not the value we're looking for
  // and there is still something to loop over (to prevent infinite loop)
  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      // less than, reassign end as the middle
      end = middle - 1;
    } else {
      // greater than, reassign start as the middle
      start = middle + 1;
    }
    // reassign middle based on the new start/end values
    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] === val) {
    return middle;
  } else {
    return -1;
  }
}

console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8], 6)); // 5
