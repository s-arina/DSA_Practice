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

// ============================== BEST TIME TO BUY & SELL STOCK ==============================
// ============================== BEST TIME TO BUY & SELL STOCK ==============================

/* Given an array:
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

/* Given a string containing just the characters:
    - (){}[]
    - determine if the input string is valid
    - open brackets must be closed by the same type of brackets
    - open brackets must be closed in the correct order
    - every open bracket has a corresponding close bracket of the same type
*/

// ===== TWO POINTERS
// TIME – O(n), SPACE – O(n)

function validParentheses(str) {
  // if there are corresponding open/close brackets next to each other, delete them
  // repeat the process until all brackets are able to be deleted, then it's true
  // otherwise we know it's invalid

  // iterate through the string, if there is an open bracket, push their corresponding close bracket into the stack

  //  i
  // '( [ ] ) { }'
  // stack = [')']

  //    i
  // '( [ ] ) { }'
  // stack = [')', ']']

  //      i
  // '( [ ] ) { }'
  // a close bracket is found, if it exists in the stack, pop it off
  // stack = [')', ']'] => stack = [')']

  let hashMap = { '(': ')', '[': ']', '{': '}' };
  // key : value pairs
  let stack = [];

  // loop through the string
  for (let char of str) {
    // if the opening bracket exists in the string
    if (hashMap[char]) {
      // it will then push it's closing bracket into the stack (key value pair)
      stack.push(hashMap[char]);
      // else if it's not an opening bracket, it's a closing bracket
      // check if it exists in the stack
      // if the stack is not empty and top of the stack matches,
      // pop it off
      // it has to be the last element because ([)] is false, they have to be IN ORDER
    } else if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
      // else, it is a closing bracket and the top of the stack DOESN'T match
    } else {
      return false;
    }
  }
  // empty stack/string is also valid
  return stack.length === 0;
}

console.log(validParentheses('()[]{}')); // true
console.log(validParentheses('([)]')); // false
console.log(validParentheses('(]')); // false
