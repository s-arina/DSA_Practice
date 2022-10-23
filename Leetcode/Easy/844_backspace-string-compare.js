// ============================== BACKSPACE STRING COMPARE ==============================
// ============================== BACKSPACE STRING COMPARE ==============================

/* 
Given two strings s and t:
    - return true if they are equal when both are typed into empty text editors
    - '#' means a backspace character
    - note that after backspacing an empty text, the text will continue empty

EXAMPLE:

input: s = 'ab#c', t = 'ad#c'
output:  true
- both s and t become 'ac' after backspacing the appropriate characters
*/

// ===== METHOD
// TIME – O(n + m), SPACE – O(1)
// helper function is running on different strings of possible different lengths

var backspaceCompare = function (s, t) {
  // compare both strings after the backspaces have been accounted for/letters deleted
  return edit(s) === edit(t);

  // HELPER FUNCTION
  function edit(str) {
    let res = '';
    let backspaces = 0;

    // loop BACKWARDS through the string
    for (let i = str.length; i >= 0; i--) {
      if (str[i] === '#') {
        // increment the counter if the character is a #
        backspaces++;
      } else if (backspaces > 0) {
        // decrement backspaces if the count is > 0
        backspaces--;
        // this cancels out the counter
        // it SKIPS the current element TO DECREMENT instead, so it doesn't get added into the res
      } else {
        // else the current element is not a #, add it to the res string
        res = str[i] + res;
      }
    }
    // return the string with the necessary elements removed
    return res;
  }
};

console.log(backspaceCompare('ab#c', 'ad#c')); // true
console.log(backspaceCompare('a#c', 'b')); // false
