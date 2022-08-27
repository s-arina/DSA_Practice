// ============================== PROBLEMS ==============================

/*
    - Valid Anagram
    - Two Sum
    - Valid Palindrome
*/

// ============================== VALID ANAGRAM ==============================
// ============================== VALID ANAGRAM ==============================

/* Given two strings s & t:
    - return true if t is an anagram of s, else false
    - a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the orginal letters exactly once
*/

// ===== BUILT IN METHODS
// TIME – O(nlogn), SPACE – O(1)

function isAnagramSet(s, t) {
  if (s.length !== t.length) return false;
  return s.split('').sort().join('') === t.split('').sort().join('');
}

console.log(isAnagramSet('anagram', 'nagaram')); // true
console.log(isAnagramSet('rat', 'car')); // false

// ===== FREQUENCY COUNTER
// TIME – O(n), SPACE – O(n)

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let sCount = {};
  let tCount = {};

  // figure out how many of each letter exist in s
  for (let val of s) {
    sCount[val] = ++sCount[val] || 1;
  }
  // figure out how many of each letter exist in t
  for (let val of t) {
    tCount[val] = ++tCount[val] || 1;
  }

  // loop through one and compare their counts
  for (let val in sCount) {
    if (sCount[val] !== tCount[val]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false

// ============================== TWO SUM ==============================
// ============================== TWO SUM ==============================

/*
Given an array of integers (sorted or unsorted) and a target:
  - return the first two values where the sum is the target
OR
  - return a boolean if two values sum to the target
OR
  - return the indices of both values
*/

// ===== MULTIPLE POINTERS (FASTER THAN MAP)
// TIME – O(n), SPACE – O(1)

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

console.log(twoSum([1, 2, 3, 4, 5, 6], 10)); // values: [4, 6], indices: [3, 5], true

console.log(twoSum([1, 2, 3, 4, 5, 6], 20)); // [], false

// ===== HASH MAP
// TIME – O(n), SPACE – O(n)

function twoSumMap(arr, target) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (target - arr[i] in map) {
      return [map[target - arr[i]], i];
    } else {
      map[arr[i]] = i;
    }
  }
}

console.log(twoSumMap([1, 2, 3, 4, 5, 6], 10)); // indicies: [3, 5]

// ============================== VALID PALINDROME ==============================
// ============================== VALID PALINDROME ==============================

/* 
Given a string:
  - filter out non-alphanumeric characters and lowercase
  - return true if it's a palindrome (the same word when reversed)
*/

// ===== MULTIPLE POINTERS
// TIME – O(n), SPACE – O(1)

function palindrome(s) {
  let str = s.replace(/[\W_]g/, '').toLowerCase();

  let start = 0;
  let end = s.length - 1;

  // while the pointers haven't met yet/passed each other
  while (start < end) {
    // !== letters don't match, not palindrome
    if (str[start] !== str[end]) {
      return false;
    } else {
      start++;
      end--;
    }
    return true;
  }
}

console.log(palindrome('A man, a plan, a canal: Panama')); // true
console.log(palindrome('anagram')); // false

// ===== BUILT IN METHODS
// TIME – O(n), SPACE – O(1)

function palindromeBuiltIn(s) {
  let str = s.replace(/[\W_]/g, '').toLowerCase();
  return str === str.split('').reverse().join('');
}

console.log(palindromeBuiltIn('A man, a plan, a canal: Panama')); // true
console.log(palindromeBuiltIn('anagram')); // false
