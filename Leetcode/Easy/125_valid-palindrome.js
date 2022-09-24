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
