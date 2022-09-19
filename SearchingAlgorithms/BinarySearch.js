// ======================================== BINARY SEARCH

/*
Binary search is a much faster form of search.

Rather than eliminating one element at the time, you can eliminate half of the remaining elements at a time.

Binary search only works on SORTED arrays.

It uses the divide and conquer method.
*/

// ==================== TIME COMPLEXITY

/*
- O(log(n)) – worst/average case (but still just as good as O(1))
- O(1) – best case if the element is the first thing we search for
*/

// ============================================================ EXAMPLES

/*
Given an array and a value:
    - return the index position of the value if it exists
*/

// ==================== METHOD: Multiple Pointers

function binarySearch(arr, val) {
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

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)); // 6

/*
input 
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  target = 7 (return the index position)

  1) let start = 0, let end = arr.length - 1
    - two pointers, beginning and end of the array

    - start = 0
    - end = 9

  ===

  2) while (start <= end)
    - while the two pointers haven't met
  
  ===

  3) let middle = Math.floor((start + end) / 2)
    - store the middle index of each iteration

    - first middle = 0 + 9 = 9 / 2 = 4.5 = 4
    - arr[4] = 5

    1   2   3   4   5   6   7   8   9   10
  start            mid                  end

  ===

  4) if (arr[middle] = val) return middle

  ===

  5) else if (arr[middle] < val) 
    - arr[4] (5) < 7
    - 4 < 7

  start = middle + 1
  0 = 4 + 1, 5

  - start the loop again (start is still <= end)
  - get the middle again using index position values (5 + 9 = 14 / 2 = 7)

  start = 5, mid = 7, end = 9 (index positions)

    1   2   3   4   5   6   7   8   9   10
                      start    mid      end

  ===

  6) else (arr[middle] > val)
    - arr[7] (8) > 7
    - 7 > 7

  end = middle - 1
  9 = 7 - 1, 6

  - start the loop again (start is still <= end)
  - get the middle again using index position values (5 + 6 = 11 / 2 = 5.5 = 5)

  start = 5, mid = 5, end = 6 (index positions)

    1   2   3   4   5   6   7   8   9   10
                      start end
                       mid

  ===

  7) else if (arr[middle] < val) 
    - arr[5] (6) < 7
    - 5 < 7

  start = middle + 1
  5 = 5 + 1, 6

  - start the loop again (start is still <= end)
  - get the middle again using index position values (6 + 6 = 12 / 2 = 6)

  start = 6, mid = 6, end = 6 (index positions)

    1   2   3   4   5   6   7   8   9   10
                          start
                           end
                           mid

  ===

  8) if (arr[middle] = val) return middle

  arr[6] = 7

  7 = 7 (target)
  
output:
  return middle, 6 (index position)

*/
