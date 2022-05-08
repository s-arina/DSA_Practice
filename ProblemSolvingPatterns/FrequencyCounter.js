// ======================================== FREQUENCY COUNTERS

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

// ======================================== EXAMPLES

// ==================== ANAGRAM

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
