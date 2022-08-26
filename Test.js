function twoSum(arr, sum) {
  // loop through the array
  // add the numbers together
  // if their sum === sum, return [num1, num2]
  // MULTIPLE POINTERS
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let tempSum = arr[start] + arr[end];
    if (tempSum === start) {
      return [arr[start], arr[end]];
    } else if (sum < tempSum) {
      start++;
    } else {
      end++;
    }
  }
}

// return the two numbers that total to the sum
console.log(twoSum([1, 2, 3, 4, 5, 6], 10));
