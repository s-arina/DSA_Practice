// ======================================== QUICK SORT

/*
Like merge sort, it expploits the fact that arrays of 0 or 1 elements are always sorted.

It works by selecting one element (called the "pivot") and finding the index where the pivor should end up in the sorted array.

Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.

Usually the equivalent of .sort default method in JS.
*/

// ==================== THE IDEA

/*
- pick a middle element
- move all the numbers that are lower to its left
- move all the numbers that are greater to its right
- the middle element is the only one in the right spot
- repeat the process for the left/right sides

1. Create a pivot function
2. Apply quick sort to it

PIVOT
- a function resposible for arranging elements in an array on either side of a pivot

- given an array, this helper should designate an element as the pivot
- it should rearrange the elements in the array so that all values less than the pivot are moved to its left
- and all valuees greater than the pivot are moved to the right
- the order of elements on either side shouldn't matter

QUICK SORT
- three arguments: array, start index (0), end index (arr.length - 1)
- grab the pivot from the start of the array
- store hte current pivot index in a variable (to keep track of where it ends up)

- loop through the array
- if the pivot > currentElement, pivot index++
- swao the currentElement with the element at the pivot index

- swap the starting element (the pivot) with the pivot index
- return the pivot index
*/

// ==================== TIME COMPLEXITY

/*
- Best: O(n log n)
- Average/Worst : O(n^2) – nested loop, going over n elements in the array n times
*/

// ============================================================ EXAMPLES

/*
Given an array of numbers:
 - sort them from lowest to highest
*/

// ==================== METHOD: QUICK SORT
// TC – O(n log n), SC – O(log n)

function pivot(arr) {
  // generic swap function
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let start = 0;
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= arr.length - 1; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

console.log(pivot([2, 513, -23, 125, 92, 34, -12, -74])); // 3

// function quickSort(arr) {}

// console.log(quickSort([2, 513, -23, 125, 92, 34, -12, -74]));
