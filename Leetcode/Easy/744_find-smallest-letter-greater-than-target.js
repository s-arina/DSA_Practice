// ============================== FIND SMALLEST LETTER GREATER THAN TARGET ==============================
// ============================== FIND SMALLEST LETTER GREATER THAN TARGET ==============================

/* 
Given a characters array letters that is sorted in non-decreasing order and a character target:
    - return the smallest character in the array that is larger than target

Note that the letters wrap around.
    EXAMPLE:
    letters = ['a', 'b']
    target = 'z'
    output = 'a'

    letters = ['c', 'f', 'j']
    target = 'a'
    output = 'c'

NOTES:
 - when given a sorted list, most of the time it will be a BINARY SEARCH problem

*/

// ===== BINARY SEARCH, TWO POINTERS
// TIME – O(log(n)), SPACE – O(n)

function nextGreatestLetter(letters, target) {
  // ['a', 'b'], 'z'

  // conditional check when there's only 2 letters in the array
  // if a > z OR z >= b, return a

  if (letters[0] > target || target >= letters[letters.length - 1])
    return letters[0];

  // letters = ['c', 'f', 'j'], 'c'

  let start = 0; // 0
  let end = letters.length - 1; // 2

  // 1st loop: 0 < 2
  // 2nd loop: 0 < 1
  // 3rd loop: 1 < 1, break loop
  while (start < end) {
    // 1st loop: mid = 0 + 2 / 2 = 1, floor = 1
    // 2nd loop: mid = 0 + 1 / 2 = .5, floor = 0
    let mid = Math.floor((start + end) / 2);
    // 1st loop: letters[1] ('f') <= target ('c') ? no
    // 2nd loop; letters [0] ('c') <= target ('c') ? yes
    if (letters[mid] <= target) {
      // 2nd loop: 0 = 0 + 1, 1
      start = mid + 1;
    } else {
      // 1st loop: 2 = 1
      end = mid;
    }
  }

  // loop done: return letters[1] => f
  return letters[start];
}

console.log(nextGreatestLetter(['c', 'f', 'j'], 'c')); // 'f'
console.log(nextGreatestLetter(['a', 'b'], 'z')); // 'a'

// ===== BUILT IN - FIND
// TIME – O(n), SPACE – O(1)

function nextGreatestLetterFind(letters, target) {
  return letters.find((c) => c > target) || letters[0];
}
console.log(nextGreatestLetterFind(['c', 'f', 'j'], 'c')); // 'f'
console.log(nextGreatestLetterFind(['a', 'b'], 'z')); // 'a'
