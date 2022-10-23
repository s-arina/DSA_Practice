// ============================== CONVERT 1D ARRAY INTO 2D ARRAY ==============================
// ============================== CONVERT 1D ARRAY INTO 2D ARRAY ==============================

/* 
Given a 0-indexed 1-dimensional integer array original, and two integers, m and n:
    - create a 2-dimensional array
    - with m rows and n columns using all the elements from original
    - return an m x n 2D array or an empty 2D array if its impossible

EXAMPLE:

m = 2, n = 2
                [1][2]
[1][2][3][4] -> [3][4]

input: original = [1, 2, 3, 4], m = 2, n = 2
output: [[1,2],[3,4]]
- the constructed 2D array should contain 2 rows and 2 columns
*/

// ===== METHOD
// TIME – O(n), SPACE – O(n^2) or O(n+m)
// O(n^2) because creating a 2D array of n * n elements?
// O(n+m) because number of rows + number of columns?

var construct2DArray = function (original, m, n) {
  // array cannot be made if not enough elements
  if (original.length !== m * n) return [];
  // outer array to return, inner array to make the rorws
  let arr = [];
  let innerArr = [];

  for (let i = 0; i < original.length; i++) {
    // push elements into the inner array
    // creating the rows
    innerArr.push(original[i]);
    // when the inner array reaches the length of the columns needed (n total)
    if (innerArr.length === n) {
      // push the finished row into the outer array and reset the inner array to start the next row
      arr.push(innerArr);
      innerArr = [];
      // the outer array will continue to be maxed out at n columns
    }
  }
  // return the 2D array
  return arr;
};

console.log(construct2DArray([1, 2, 3, 4], 2, 2)); // [[1, 2], [3, 4]]
console.log(construct2DArray([1, 2], 1, 1)); // []

/*
NOTES:
m = row
n = column
- m * n = total number of elements needed 
- an array cannot be made if the original doesn't have enough elements to use

two arrays
- outer array that will encase all row/column arrays and be returned at the end
- inner array that will be populated with with n elements and pushed into the outer array (there will be multiple)

for loop
- loop to fill the inner array
- the loop must iterate original.length times and push each element into the inner array (original[i])

if check
- check for when the inner array has reached its max needed length (n)
- when it has, push it into the outer array
- reset the inner array to start the next row

after the loop ends and all elements have been used
return the outer array
*/
