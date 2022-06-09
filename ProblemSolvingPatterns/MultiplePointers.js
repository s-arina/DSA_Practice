// ============================================================ MULTIPLE POINTERS

/*
This pattern consists of using pointers or values that correspond to an index position and move towards the beginning/middle based on a certain condition.

This is efficient for solving problems with minimal space complexity as well.

Useful for algorithms with:
- checking for multiple values within the same array
- checking if one input includes the whole/parts of the other
*/

// ==================== THE IDEA

/*
The idea behind multiple pointers is to use two references in a linear structure (array/string/linked list/etc.), and move those references ([i], [j], indicies for ex.) to compare values against each other.
*/

// ============================================================ EXAMPLES

// ======================================== SUM ZERO

/*
Given a sorted array of integers:
- return the first two values where the sum is 0

OR

- return a boolean if two values sum to zero

OR

- return the indices of both values
*/

// ==================== METHOD: MULTIPLE POINTERS

function sumZero(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] + arr[end] === 0) {
      return [
        'values:',
        arr[start],
        arr[end],
        'indices:',
        start,
        end,
        'boolean: true',
      ];
    }
    start++;
    end--;
  }
  return [[], 'boolean: false'];
}

console.log(sumZero([-5, -2, -1, 0, 2, 3])); // values: [-2, 2], indices: [1,4], true
console.log(sumZero([-5, -4, -1, 0, 2, 3])); // [], false

// ======================================== TWO SUM

/*
Given an array of integers (sorted or unsorted) and a target:
  - return the first two values where the sum is the target

OR

  - return a boolean if two values sum to the target

OR

  - return the indices of both values
*/

// ==================== METHOD: MULTIPLE POINTERS
// TC – O(n), SC – O(1)

function twoSum(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === target) {
      return [
        'values:',
        arr[start],
        arr[end],
        'indices:',
        start,
        end,
        'boolean: true',
      ];
    } else if (sum < target) {
      start++;
    } else {
      end++;
    }
  }
  return [[], 'boolean: false'];
}

console.log(twoSum([1, 2, 3, 4, 5, 6], 10)); // values: [-2, 2], indices: [1,4], true
console.log(twoSum([1, 2, 3, 4, 5, 6], 20)); // [], false

// ======================================== PALINDROME (SINGLE STRING)

/*
Given a string:
  - filter out non-alphanumeric characters and lowercase
  - return true if it's a palindrome (the same word when reversed)
*/

// ==================== METHOD: SPLIT/REVERSE/JOIN

function isPalindromePrebuilt(s) {
  let string = s.replace(/[\W_]/g, '').toLowerCase();
  return string === string.split('').reverse().join('');
}

console.log(isPalindromePrebuilt('A man, a plan, a canal: Panama')); // true
console.log(isPalindromePrebuilt('anagram')); // false

// ==================== METHOD: MULTIPLE POINTERS
// TC – O(n), SC – O(n)

function isPalindrome(s) {
  let string = s.replace(/[\W_]/g, '').toLowerCase();

  let start = 0;
  let end = string.length - 1;

  while (start < end) {
    if (string[start] !== string[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('anagram')); // false
