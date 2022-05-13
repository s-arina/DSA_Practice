// ============================================================ FREQUENCY COUNTERS

/*
This pattern uses objects or sets to collect values/frequencies of values.

This can often avoid the need for nested loops of O(n^2) operations with arrays/strings.

Useful for algorithms with:
  - multiple pieces of data/inputs
  - comparing similar values
  - checking for anagrams
  - if a value is inside another value
  - comparing pieces of data to inputs or more than two
  - frequencies of things occurring

It’s usually O(n) time.
*/

// ==================== THE IDEA

/*
The idea behind the frequency counter is to usually use an object and provide a way of breaking down the contents of an array or a string.

Then you’re able to quickly compare that breakdown to how another object looks that was constructed from a string or an array.

In the example, we break the arrays down into objects that classify what’s in those arrays, and then we compare them.
*/

// ============================================================ EXAMPLES

// ======================================== ANAGRAM

/*
Given two strings, s and t:
  - return true if t s an anagram of s
  - return false if not
*/

// ==================== METHOD: new Set

function isAnagramSet(s, t) {
  if (!s || !t || s.length !== t.length) return false;
  return s.split('').sort().join('') === t.split('').sort().join('');
}

console.log(isAnagramSet('anagram', 'nagaram')); // true
console.log(isAnagramSet('rat', 'car')); // false

// ==================== METHOD: Frequency Counter
// TC – O(n), SC – O(n)

function isAnagram(s, t) {
  if (!s || !t || s.length !== t.length) return false;

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

// ======================================== ARRAY 1 SQUARED SAME AS ARRAY 2

/*
Given two arrays, arr1 and arr2:
  - return true if arr2 contains all values of arr1 squared.
*/

// ==================== METHOD: FREQUENCY COUNTER

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let arr1Count = {};
  let arr2Count = {};

  for (let val of arr1) {
    arr1Count[val] = ++arr1Count[val] || 1;
  }

  for (let val of arr2) {
    arr2Count[val] = ++arr2Count[val] || 1;
  }

  for (let key in arr1Count) {
    if (!(key ** 2 in arr2Count)) {
      return false;
    }

    if (arr2Count[key ** 2] !== arr1Count[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 2, 4], [1, 4, 6, 16])); // false
console.log(same([1, 2, 2, 4], [1, 4, 4, 16])); // true
console.log(same([1, 2, 3, 4], [5, 6, 7, 8])); // false

// ======================================== SAME FREQUENCY

/*
Given two positive integers:
  - find out if the two numbers have the same frequency of digits.
*/

// ==================== METHOD: TOSTRING/SPLIT/SORT/JOIN

function sameFrequencyPrebuilt(num1, num2) {
  return (
    num1.toString().split('').sort().join('') ===
    num2.toString().split('').sort().join('')
  );
}

console.log(sameFrequencyPrebuilt(182, 281)); // true
console.log(sameFrequencyPrebuilt(123, 456)); // false

// ==================== METHOD: FREQUENCY COUNTER

function sameFrequency(num1, num2) {
  let num1Str = num1.toString().split('');
  let num2Str = num2.toString().split('');

  if (num1Str.length !== num2Str.length) return false;

  let num1Count = {};
  let num2Count = {};

  for (let val of num1Str) {
    num1Count[val] = ++num1Count[val] || 1;
  }

  for (let val of num2Str) {
    num2Count[val] = ++num2Count[val] || 1;
  }

  for (let key in num1Count) {
    if (num1Count[key] !== num2Count[key]) {
      return false;
    }
    return true;
  }
}

console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(123, 456)); // false

// ======================================== ARE THERE DUPLICATES

/*
Given an unknown number of arguments:
  - return true if there are duplicates among the arguments passed in
*/

// ==================== METHOD: NEW SET

function areThereDuplicatesSet() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicatesSet(2, 2, 3)); // true
console.log(areThereDuplicatesSet(1, 2, 3)); // false

// ==================== METHOD: FREQUENCY COUNTER

function areThereDuplicates() {
  let arr = [...arguments];
  if (arr.length === 0) return false;

  let count = {};

  for (let val of arr) {
    count[val] = ++count[val] || 1;
  }

  for (let key in count) {
    if (count[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(2, 2, 3)); // true
console.log(areThereDuplicates(1, 2, 3)); // false
