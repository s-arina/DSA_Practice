// ============================== ADD BINARY ==============================
// ============================== ADD BINARY ==============================

/* 
Given two binary strings a and b:
    - return their sum as a binary string
*/

// ===== BIGINT
// TIME – O(n), SPACE – O(1)
// dependent on the length of correctly-matching characters

var addBinary = function (a, b) {
  /*
  1. a and b are binary strings
  2. convert a and b to regular numbers
  3. sum them
  4. convert the sum to a binary string
  
  - BigInt is a special numeric type that provides support for integers of arbitrary length
  - use a template literal to make a string that reads '0bxxxxxxxxxxxx' 
  - this representation of binary strings is supported in ES6 and tells BigInt that the string is in fact binary and not just a base ten number than happens to only have 1's and 0's
  
  */

  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};

console.log(addBinary([1, 2, 3, 1])); // true
console.log(addBinary([1, 2, 3, 4])); // false
