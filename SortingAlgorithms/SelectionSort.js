// ======================================== SELECTION SORT

/*
Similar to bubble sort, but:
 - instead of first placing large values into sorted position
 - place small values into sorted position
*/

// ==================== THE IDEA

/*
- store the first element as the min (smallest) value's index position
- compare this to the next value in the array until you find a smaller value
- if a smaller value is found, set that to be new min
- if the min is not the first min you started with, swap the two values
- repeat until sorted, starting from the next element
*/

// ==================== TIME COMPLEXITY

/*
- O(n^2) – nested loop, going over n elements in the array n times
*/

// ============================================================ EXAMPLES

/*
Given an array of numbers:
 - sort them from lowest to highest
*/

// ==================== METHOD: SELECTION SORT
// TC – O(n^2), SC – O(1)

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // lowest as first element
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      // if the value in front of it is lower, it's the new lowest
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    // swap them if the current lowest changed (checked above)
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([2, 513, -23, 125, 92, 34, -12, -74]));
