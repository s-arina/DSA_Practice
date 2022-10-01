// ============================== PLUS ONE ==============================
// ============================== PLUS ONE ==============================

/* 
Given a large integer represented as an integer array digits:
    - increment the large integer by one and return the resulting array of digits

EXAMPLE:

input: = [1, 2, 2, 9]
output: [1, 2, 3, 0]
- 1229 + 1 = 1230, represented as an array
*/

// ===== FOR LOOP, UNSHIFT
// TIME – O(n), SPACE – O(1)
// looping twice (for loop, unshift)

var plusOne = function (digits) {
  // iterate backwards
  for (let i = digits.length - 1; i >= 0; i--) {
    // increment each element by 1
    digits[i]++;
    // if the resulting value is > 9 (10)
    if (digits[i] > 9) {
      // turn it into a 0
      digits[i] = 0;
      // when the next loop starts, the next number still gets incremented and checked
    } else {
      // if it's < 9, the rest of the digits will be returned normally
      return digits;
    }
  }

  // conditional check if the array only has 9's as they'll all become 0's
  digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 3])); // 124
console.log(plusOne([1, 2, 2, 9])); // 1230
console.log(plusOne([9, 9])); // 100
