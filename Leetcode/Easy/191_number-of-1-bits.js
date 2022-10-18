// ============================== NUMBER OF 1 BITS ==============================
// ============================== NUMBER OF 1 BITS ==============================

/* 
Given an unsigned integer:
    - return the number of '1' bits it has (also known as the Hamming weight)

A signed integer is a 32-bit datum that encodes an integer in the range [-2147483648 to 2147483647].
An unsigned integer is a 32-bit datum that encodes a non-negative integer in the range [0 to 4294967295].

The signed integer is represented in twos complement notation. The most significant byte is 0 and the least significant is 3.
The unsigned integer is rerpesented by an unsigned binary number whose most significant byte is 0 and the least significant is 3.

EXAMPLE:

input: n = 00000000000000000000000000001011
output: 3
- the input binary string 00000000000000000000000000001011 has a total of three '1' bits
*/

// ===== INTEGER/BIT MANIPULATION
// TIME – O(n), SPACE – O(1)

var hammingWeightBitManipulation = function (n) {
  // counter for all the 1s
  let sum = 0;

  // while the integer is NOT 0
  while (n !== 0) {
    // check if the last bit is 1
    // this can be used with a bitwise AND to check for an odd bit (1) or an even bit (0)
    // increment the counter if it
    sum += n & 1;

    // use unsigned right shift
    // shift n by 1 bits
    // 0s are filled in from the left
    n = n >>> 1;
  }

  return sum;
};

console.log(hammingWeightBitManipulation(00000000000000000000000000001011)); // 3
console.log(hammingWeightBitManipulation(00000000000000000000000010000000)); // 1

/*
UNSIGNED RIGHT SHIFT ASSIGNMENT OPERATOR
- the unsigned right shift operator moves the specified amount of bits to the right and assigns the result to the variable

let a = 5; // 00000000000000000000000000000101
a >>>= 2; // 00000000000000000000000000000001

console.log(a); // 1
*/
