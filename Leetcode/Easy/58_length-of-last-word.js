// ============================== LENGTH OF LAST WORD ==============================
// ============================== LENGTH OF LAST WORD ==============================

/* 
Given a string s consisting of words and spaces:
    - return the length of the LAST word in the string

EXAMPLE:

input: s = "Hello World"
output: 5
- "World" is the last word with the length 5

input: s = "   fly me   to   the moon  "
output: 4
- "moon" is the last word with the length 4
*/

// ===== TRIM, SPLIT, POP
// TIME – O(n), SPACE – O(1)
// split goes through each element of the string

var lengthOfLastWord = function (s) {
  // trim - remove spaces from the beginning/end
  // split - split the string when a space is found, keeping whole words
  // pop - get the last element of an array
  // length - get the length of the element

  return s.trim().split(' ').pop().length;
};

console.log(lengthOfLastWord('Hellow World')); // 5
console.log(lengthOfLastWord('   fly me   to   the moon  ')); // 4

// ===== MAX VARIABLE (SLOWER?)
// TIME – O(n), SPACE – O(1)

var lengthOfLastWordMax = function (s) {
  // two variables to track

  let max = 0;
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    // loop through the string, if there is no space
    // count the letters of the word, length++
    // set max to be the length
    if (s[i] !== ' ') {
      length++;
      max = length;
      // else if there is a space, reset length to 0
      // max is still the last length saved before reset
      // even if the end of the string has spaces, they aren't counted
    } else {
      length = 0;
    }
  }
  return max;
};

console.log(lengthOfLastWordMax('Hellow World')); // 5
console.log(lengthOfLastWordMax('   fly me   to   the moon  ')); // 4
