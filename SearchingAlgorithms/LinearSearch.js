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

// ==================== LINEAR SEARCH

/*
Given an array and a value:
    - return the index position of the value if it exists
*/

// ==================== METHOD: for loop
// TC – O(n) (worst), O(1) (best)
// SC – O(1)

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 6)); // 5

// ==================== GLOBAL LINEAR SEARCH

/*
Given an array and a value:
    - return ALL indicies of all the occurences of the element
*/

// ==================== METHOD: for loop
// TC – O(n) (worst), O(1) (best)
// SC – O(1)

function globalLinearSearch(arr, val) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    // push every instance of the val into an array
    if (arr[i] === val) results.push(i);
  }
  if (!results) {
    return -1;
  }
  return results;
}

console.log(globalLinearSearch([1, 2, 3, 4, 5, 6, 6, 7, 8], 6)); // 5
