// ======================================== NAIVE STRING SEARCH

/*
Suppose you want to count the number of times a smaller string appears in a longer string.

A straightforward approach involves checking pairs of characters individually.
*/

// ==================== TIME COMPLEXITY

/*
- O(n)
*/

// ============================================================ EXAMPLES

/*
Given two strings:
    - return the amount of times the second string appears in the first string.
*/

// ==================== METHOD: SLIDING WINDOW

function stringSearch(str1, str2) {
  let count = 0;
  // similar to i and j
  let index = 0;
  let window = 0;

  while (index < str1.length) {
    // if there is a match, check the next value by moving the window up
    if (str1[index] === str2[window]) {
      window++;
    } else {
      window = 0;
    }

    // if the window's length matches str2 length, it's a full match
    if (window === str2.length) {
      // increment count and reset window to continue looking for more
      count++;
      window = 0;
    }
    index++;
  }
  return count;
}

console.log(stringSearch('lolmaoolol', 'lol')); // 2
