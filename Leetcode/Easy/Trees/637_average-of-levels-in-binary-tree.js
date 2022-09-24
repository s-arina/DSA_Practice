// ============================== AVERAGE OF LEVELS IN BINARY TREE ==============================
// ============================== AVERAGE OF LEVELS IN BINARY TREE ==============================

/* Given the root of a binary tree:
    - return the average value of the nodes on each level in the form of an resay

EXAMPLE:

        3

    9       20

        5       7

root = [3, 9, 20, null, null, 15, 7]
output: [3, 14.5, 11]
- The average value of nodes on level 0 is 3 (3 / 1 = 3)
- The average value of nodes on level 1 is 14.5 (9 + 20 = 29 / 2 = 14.5)
- The average value of nodes on level 2 is 11 (15 + 7 = 22 / 2 = 11)

*/

// ===== RECURSION / BREADTH FIRST SEARCH
// TIME – O(n), SPACE – O(n)
// each node is visited once
// a new array is being created

/*
STEPS / BASE / EDGE CASES:

    - when talking about levels in a binary tree, BREADTH FIRST SEARCH should come to mind

    1) create a queue array with the root as the first value
    2) create an array where the averages will be stored (return at the end)
    3) push each queue entry's children onto the end of the queue
    4) the queue should run to the end of the level of the tree before moving onto the next
    
    5) getting the average requires all nodes of a level to be summed then divided by the length
    6) take the length of the queue at the start of the row
    7) once you've processed that many nodes from the queue, you'll know that you're ready to start the next row

    8) long as the queue exists, take each row, sum the row's values (row) 
    9) then divide by the length of the row (qlen) to find the average
    10) push each average into the answer array (arr)

    - line by line code:

    1) queue array with the root as the first value
    2) empty averages array
    3) track the length of the queue array

    4) loop through the array and take the first element of the queue
    5) add all the values in the first element into a sum
    6) if the root has left/right child nodes, push them into the queue for the next loop
    7) calculate and push the average of the first element into the averages array

    8) for loop repeats 4-7 until queue is empty
    9) return the averages array
*/

function averageOfLevels(root) {
  // create an array with the root value
  let q = [root]; // [ [3,9,20,null,null,15,7] ] starts off with one element in the array, the first level
  console.log('0) q ->', q);

  // create an empty array that will be returned with the averages in it
  let ans = [];

  // while the queue is not empty
  while (q.length) {
    // track the length of the queue
    let qlen = q.length; // it is 1 at the start
    console.log('1) qlen ->', qlen);

    // track the sum of the elements in the current level of the tree
    let rowSum = 0;

    // loop through the tree q.length number of times (aka the current level)
    for (let i = 0; i < qlen; i++) {
      // shift the first element from the array and store it in curr
      let curr = q.shift();
      console.log('2) curr ->', curr);
      console.log('2) q after shift ->', q);

      // add the values inside curr (values of the current level) to the current sum
      rowSum += curr.val;
      console.log('3) curr.val ->', curr.val);
      console.log('4) rowSum += curr.val ->', rowSum);

      // if the current node has a left and/or right child, push them into the queue for the next loop
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
      console.log('4) q if left/right child exists ->', q);
    }

    // get the average by dividing the sum of the elements by the length
    // push the average into the array
    ans.push(rowSum / qlen);
    console.log('5) ans ->', ans);
  }

  // return the array with all the averages of each level
  return ans;
}
