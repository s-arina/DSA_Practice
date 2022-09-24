// ============================== COUNTING BITS ==============================
// ============================== COUNTING BITS ==============================

/*
Given an integer n:
    - return an array of length n + 1 such that for each i (0 <= i <= n),
    - array[i] is the number of 1's in the binary representation of i
*/

// ===== FOR LOOP
// TIME – O(n), SPACE – O(n)

var countBits = function (num) {
  let bits = [];
  // loop through n amount of times
  for (let i = 0; i <= num; i++) {
    // convert each i to it's binary form and remove the 0's
    // push the amount of 1's (length) into the arrary
    bits.push(i.toString(2).replace(/0/g, '').length);
  }
  return bits;
};

console.log(countBits(2)); // 0 -> 0 // 1 -> 1 // 2 -> 10 -----> [0, 1, 1]
console.log(countBits(5)); // [0, 1, 1, 2, 1, 2]
