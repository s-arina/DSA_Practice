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
