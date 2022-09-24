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
