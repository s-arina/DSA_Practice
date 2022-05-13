// ======================================== LINEAR SEARCH

/*
Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want.

This works for UNSORTED arrays.

JS search methods:

- `.indexOf()`
- `.includes()`
- `.find()`
- `.findIndex()`
*/

// ==================== TIME COMPLEXITY

/*
- O(n) – as the length of the array grows, so does the time needed to search through it, worst case
- O(1) – best case if the element is the first thing we search for
*/

// ============================================================ EXAMPLES

/*
Given an array and a value:
    - return the index position of the value if it exists
*/

// ==================== METHOD: for loop

function LinearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

console.log(LinearSearch([1, 2, 3, 4, 5, 6, 7, 8], 6)); // 5
