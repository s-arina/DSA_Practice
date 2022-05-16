// ============================================================ SLIDING WINDOW

/*
This pattern consists of creating a window which can be either an array or nber from one position to another.

Depending on a certain condition, the window either increases or closes (and a new window is created).

Useful for keep track of a subset of data in an array/string/etc.
*/

// ==================== THE IDEA

/*
Make a "window", which can be:
 - a single variable
 - a sub-array
 - another string

 Then slide the window, usually from left to right, to compare a specific group of elements.
*/

// ============================================================ EXAMPLES

// ======================================== MAX SUBARRAY SUM

/*
Given an array of integers and a number n:
 - calculate the maximum sum of n consecutive elements in the array
*/

// ==================== METHOD: SLIDING WINDOW
// TC – O(n), SC – O(1)

function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;
  // highest sum
  let maxSum = 0;
  // highest sum until a higher one is found
  let tempSum = 0;

  // find the first sum of n numbers
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  // it's the current highest sum
  tempSum = maxSum;

  // start the loop at n index
  // as the first n numbers were already summed
  for (let i = n; i < arr.length; i++) {
    // take the current highest sum
    // subtract the first number at the beginning
    // and add the latest number at the end
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 3, 4, 5, 6], 3)); // [4,5,6] -> 15
