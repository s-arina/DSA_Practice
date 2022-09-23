// ============================== PROBLEMS ==============================

/*
    - Valid Anagram
    - Two Sum
    - Valid Palindrome
    - Best Time to Buy & Sell Stock
    - Valid Parentheses
*/

// ============================== VALID ANAGRAM ==============================
// ============================== VALID ANAGRAM ==============================

/* 
Given two strings s & t:
    - return true if t is an anagram of s, else false
    - a word or phrase formed by rearranging the letters of a different word or phrase
    - typically using all the orginal letters exactly once
*/

// ===== BUILT IN METHODS
// TIME – O(nlogn), SPACE – O(1)

function isAnagramSet(s, t) {
  if (s.length !== t.length) return false;
  return s.split('').sort().join('') === t.split('').sort().join('');
  // 'anagram' -> 'aaagmnr'
  // 'nagaram -> 'aaagmnr'
  // 'aaagmnr' === 'aaagmnr'
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

/*
STEPS:
        1) create a map
        2) loop through array
        3) track the current element
        4) track the difference b/t the target and current element
        5) does the difference exist in the map?
        5a) if yes, return it's value in the map (map[diff]), along with the current index the loop is at (i)
        5b) if no, set the current element in the map with its index position (map[curr] = i)
*/

// ===== HASH MAP (OBJECT)
// TIME – O(n), SPACE – O(n)
// quicker than new Map()

function twoSumHashMap(arr, target) {
  let hashMap = {};

  // [1, 2, 3, 4, 5, 6], 10
  for (let i = 0; i < arr.length; i++) {
    // current element
    let curr = arr[i];
    // difference from target
    let diff = target - curr;
    // i = 0, 10 - 1 =  9 in hashMap ? No, add, keep going
    // i = 1, 10 - 2 =  8 in hashMap ? No
    // i = 2, 10 - 3 =  7 in hashMap ? No
    // i = 3, 10 - 4 =  6 in hashMap ? No
    // i = 4, 10 - 5 =  5 in hashMap ? No
    // i = 5, 10 - 6 =  4 in hashMap ? Yes

    // if the difference exists in the hashMap
    if (diff in hashMap) {
      // return hashMap[10 - 6 = 4, index 3 in hashMap], index 5
      // return the index position of the difference in the hashMap, and the current index the loop is at
      // [3, 5]
      return [hashMap[diff], i];
    } else {
      // doesn't exist? set it in the map with its index position
      // element : index
      // { 1:0, 2:1, 3:2, 4:3, 5:4 }
      hashMap[curr] = i;
    }
  }
  return [];
}

console.log(twoSumHashMap([1, 2, 3, 4, 5, 6], 10)); // indicies: [3, 5]
console.log(twoSumHashMap([1, 2, 3, 4, 5, 6], 20)); // []
console.log(twoSumHashMap([3, 2, 4], 6)); // [1, 2]

// ===== MAP DATA STRUCTURE
// TIME – O(n), SPACE – O(n)

function twoSumMap(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(target - arr[i])) {
      return [map.get(target - arr[i]), i];
    } else {
      map.set(arr[i], i);
    }
  }
  return [];
}

console.log(twoSumMap([1, 2, 3, 4, 5, 6], 10)); // indices: [3, 5]
console.log(twoSumMap([1, 2, 3, 4, 5, 6], 20)); // []
console.log(twoSumMap([3, 2, 4], 6)); // [1, 2]

// ============================== VALID PALINDROME ==============================
// ============================== VALID PALINDROME ==============================

/* 
Given a string:
  - filter out non-alphanumeric characters and lowercase
  - return true if it's a palindrome (the same word when reversed)
*/

// ===== TWO POINTERS
// TIME – O(n), SPACE – O(1)

function palindrome(s) {
  let str = s.replace(/[\W_]g/, '').toLowerCase();

  let start = 0;
  let end = s.length - 1;

  // while the pointers haven't met yet/passed each other (the middle character where they meet doesn't need to be compared)
  while (start < end) {
    // if any letters don't match, not palindrome
    if (str[start] !== str[end]) {
      return false;
    } else {
      // move the first pointer forward
      start++;
      // move the second pointer backward
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

// ============================== BEST TIME TO BUY & SELL STOCK ==============================
// ============================== BEST TIME TO BUY & SELL STOCK ==============================

/* 
Given an array:
    - choose a single day to buy and a different day in the future to sell
    - find the maximum profit you can achieve by doing so
    - if you cannot achieve any profit, return 0
*/

// ===== TWO POINTERS
// TIME – O(n), SPACE – O(1)

function maxProfit(prices) {
  let maxProfit = 0; // current highest profit
  let min = prices[0]; // current lowest price

  for (let i = 1; i < prices.length; i++) {
    // start at index = 1, 0 is already accounted for as current min

    // loop through the array, find the min
    // compare the first element to the one after, get the smaller
    min = Math.min(prices[i], min);
    // i = 1, min = Math.min(1, 7) => 1
    // i = 2, min = Math.min(5, 1) => 1
    // i = 3, min = Math.min(3, 1) => 1
    // i = 4, min = Math.min(6, 1) => 1
    // i = 5, min = Math.min(4, 1) => 1

    // min is found, 1

    // update the max profit in the same loop
    // compare the current highest profit to the difference of each element minus the min
    // whichever is the largest number gets set to the max profit
    maxProfit = Math.max(maxProfit, prices[i] - min);
    // i = 1, Math.max(0, 1 - 1 = 0) => 0
    // i = 2, Math.max(0, 5 - 1 = 4) => 4 new max
    // i = 3, Math.max(4, 3 - 1 = 2) => 4
    // i = 4, Math.max(4, 6 - 1 = 5) => 5 new max
    // i = 5, Math.max(5, 4 - 1 = 3) => 5
  }
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0

// ============================== VALID PARENTHESES ==============================
// ============================== VALID PARENTHESES ==============================

/* 
Given a string containing just the characters:
    - (){}[]
    - determine if the input string is valid
    - open brackets must be closed by the same type of brackets
    - open brackets must be closed in the correct order
    - every open bracket has a corresponding close bracket of the same type
*/

// ===== HASH MAP
// TIME – O(n), SPACE – O(n)

/*
  1) create a hash map with key-value pairs of opening and closing bracketes
  2) create a an empty stack array where the brackets will be pushed into

  3) iterate through the string, if there is an open bracket, push their corresponding close bracket into the stack
  4) but if the last element in the stack is its corresponding close bracket, delete them from the stack
  
  5) repeat the process until all brackets are able to be deleted
  6) return if the stack is empty (if !stack.length, all brackets have proper close brackets in the correct order, true)

   i
  '( [ ] ) { }'
  stack = [')']

     i
  '( [ ] ) { }'
  stack = [')', ']']

       i
  '( [ ] ) { }'
  a close bracket is found, if it exists in the stack, pop it off
  stack = [')', ']'] => stack = [')']
*/

function validParentheses(str) {
  let hashMap = { '(': ')', '[': ']', '{': '}' };
  // key : value pairs
  let stack = [];

  // loop through the string
  for (let char of str) {
    // if the opening bracket exists in the string
    if (hashMap[char]) {
      // it will then push it's closing bracket into the stack (key value pair)
      stack.push(hashMap[char]);
    } else if (stack[stack.length - 1] === char) {
      // else if it's not an opening bracket, it's a closing bracket
      // check if it exists in the stack
      // if the stack is not empty and top of the stack matches,
      // pop it off
      // it has to be the LAST ELEMENT because ([)] is false, they have to be IN ORDER
      stack.pop();
    } else {
      // else, it is a closing bracket and the top of the stack DOESN'T match
      return false;
    }
  }
  // if the stack is empty, all bracket pairs were validated / empty string
  return !stack.length;
}

console.log(validParentheses('()[]{}')); // true
console.log(validParentheses('([)]')); // false
console.log(validParentheses('(]')); // false
