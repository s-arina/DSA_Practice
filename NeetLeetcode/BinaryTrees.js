// ============================== PROBLEMS ==============================

/*

    ALGORITHMS
    - Breadth First Search
    - Depth First Search

    - Invert Binary Tree
    - Maximum Depth of Binary Tree
    - Same Tree
    - Subtree of Another Tree
    - Lowest Common Ancestor of a BST
    - Average of Levels in Binary Tree
    
    Todo:
    - Minimum Depth of Binary Tree
    - Path Sum
    - Diameter of Binary Tree
    - Merge Two Binary Trees

NOTES:
    - trees are recursive data structures because the right/left child of a root are trees of their own
*/

// ============================== BREADTH FIRST SEARCH ==============================
// ============================== BREADTH FIRST SEARCH ==============================

/*
Given a tree:
    - find the distance between two nodes

EXAMPLE:

          source
    0   –   1   –   4
    |   x
    2       3

NOTES:
    - a problem talking about levels in a binary tree should immedaitely bring to mind a breadth first search (BFS) approach
    - the classic BFS approach for a binary tree is to use a QUEUE and push each queue entry's children onto the end of the queue
    - this way, the queue will run to the end of the row/level before moving onto the next level
*/

// ============================== INVERT BINARY TREE ==============================
// ============================== INVERT BINARY TREE ==============================

/* 
Given the root of a binary tree:
    - invert the tree
    - return its root

EXAMPLE:

        2        ->       2
    1       3         3       1

input: root = [2, 1, 3]
output: [2, 3, 1]

*/

// ===== RECURSION / DEPTH FIRST SEARCH
// TIME – O(n), SPACE – O(n)
// looping through the tree
// creating a call stack everytime the function is called recursively, so it adds to space

function invertTree(root) {
  if (!root) return null;

  // swap the left and right values
  // keep one of the values in a temp variable to not lose it
  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  // call the function again on the left/right nodes
  invertTree(root.left);
  invertTree(root.right);

  // return the tree
  return root;
}

// ============================== MAXIMUM DEPTH OF BINARY TREE ==============================
// ============================== MAXIMUM DEPTH OF BINARY TREE ==============================

/* 
Given the root of a binary tree:
    - return its maxiumum depth

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

EXAMPLE:

        3

    9       20

        15      7

input: root = [3, 9, 20, null, null, 15, 7]
output: 3

*/

// ===== RECURSION / DEPTH FIRST SEARCH
// TIME – O(n), SPACE – O(n) (worst), O(log(n)) (best)
// traverse every single node to find the max depth
// the space complexity is going to be equal to the max depth of the binary tree + 1

function maxDepth(root) {
  // if no children nodes are found from a root, return 0
  if (!root) return 0;
  // since the root sits one level above its children, we need to add + 1 to the maximum depth
  return 1 + Math.max(maxDepth(root.right), maxDepth(root.left));
}

/*

EXAMPLE:

input: root = [3, 9, 20, null, null, 15, 7]

        3

    9       20

        15      7

NOTES:
    - the given root at the start only knows its own value, and its respective left/right nodes
    - it doesn't know if the left/right node have children/leaf nodes
    - if they do have children, maxDepth can be called on them as well, making recursion useful
    
    1) if (!root) return 0;
    - base case for when a node has no more leaves/children
    - instead of getting an error, cover it by using 0 value 

    2) return 1 + Math.max(maxDepth(root.right), maxDepth(root.left))
    - maxDepth(root.right) = 2 (20 -> 15, 7)
    - maxDepth(root.left) = 1 (9)
    - return the value of the side with the highest leve of depth: Math.max(1, 2)

    return 1 (the first root, 3) + 2 = 3

output: 3
*/

// ============================== SAME TREE ==============================
// ============================== SAME TREE ==============================

/* 
Given two roots of two binary trees p and q:
    - write a function to check if they are the same or not

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

EXAMPLE:

        1               1

    2       3       2       3

input: p = [1, 2, 3], q = [1, 2, 3]
output: true

*/

// ===== RECURSION / DEPTH FIRST SEARCH
// TIME – O(n), SPACE – O(n)
// n is the shortest number of nodes between p and q
// we're only going to iterate through the shortest one
// beacuse if the other one is longer, it's automatically false

/*

STEPS / BASE / EDGE CASES:
    TRUE IF:
    - if p and q are both null
    - p, q and p.val === q.val

    THEN:
    - call the function again on the left and right nodes of p and q to check them again until any of the true/false conditions are met
*/

function sameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return sameTree(p.left, q.left) && sameTree(p.right, p.left);
}

/*

EXAMPLE:

input: p = [1, 2, 3], q = [1, 2, 3]

        1               1

    2       3       2       3

    1) if (!p && !q) return true
       if (!p || !q || p.val !== q.val) return false
    - base cases before recursion call
    - we move on if p.val === q.val (the root nodes are the same)
    
    2) return sameTree(p.left, q.left) && sameTree(p.right, p.left)
    - run the function recursively on the left/right nodes

    - check the LEFT nodes of both trees
    - all are the same

        (1)            (1)

    (2)     3       (2)     3

    - then check the right nodes of both trees

        (1)            (1)

    (2)    (3)      (2)    (3)   

    - if all node checks are truthy, they are the same
    - return true
    
output: true

*/

// ============================== SUBTREE OF ANOTHER TREE ==============================
// ============================== SUBTREE OF ANOTHER TREE ==============================

/* 
Given the roots of two binary trees root and subRoot:
    - return true if thre is a subtree of root with the same structure and node values of subRoot
    - else false

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendents.
The tree tree could also be considered as a subtree of itself.

EXAMPLE:

          root           subRoot
            3               4

        4       5       1       2

    1       2

input: 
root = [3, 4, 5, 1, 2]
subRoot = [4, 1, 2]

output: true
    - subRoot exists in root with the same structure (and NO ADDED NODES)

*/

// ===== RECURSION / DEPTH FIRST SEARCH
// TIME – O(n * m), SPACE – O(n)
// helper function sameTree traverses all the nodes of two trees, making it n * m

/*
STEPS / BASE / EDGE CASES:

    - The idea is to compare the entire subRoot to the intial root, if they match, return true

    1) create a helper function to check if two trees are the same (sameTree)
    2) call sameTree on root and subRoot
    3) if they aren't the same, call the function (isSubtree) on each of the root's left and right nodes until a match with the subRoot is/isn't found
    * apply appropriate edge cases for both functions
    
    for sameTree helper function:
        TRUE IF:
        - if root and subRoot are both null
        - root, subroot and root.val === subroot.val

        THEN:
        - call the function again on the left and right nodes of root and subRoot to check them again until any of the true/false conditions are met
        - true is returned when left AND right nodes match

    for isSubtree function:
        TRUE IF:
        - if root and subRoot are both null (a null subtree is a subtree of another null subtree, but this is validated in the helper function)
        - subRoot is null but root isn't (a child node with no children of it's own are technically null as well)

        FALSE IF:
        - root is null but subRoot isn't (subRoot will have nothing to compare to)

        THEN:
        - call the function again on the the left side of the root and compare it to the subRoot
        - call the function again on the right side of the root and compare it to the subRoot
        - true is returned when EITHER left OR right return true for a match
*/

function isSubtree(root, subRoot) {
  // helper function
  var sameTree = function (root, subRoot) {
    if (!root && !subRoot) return true;
    if (!root || !subRoot || root.val !== subRoot.val) return false;

    return (
      sameTree(root.left, subRoot.left) && sameTree(root.right, subRoot.right)
    );
  };

  if (!subRoot) return true;
  if (!root) return false;
  if (sameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

// ============================== LOWEST COMMON ANCESTOR OF A BST ==============================
// ============================== LOWEST COMMON ANCESTOR OF A BST ==============================

/* Given a BST:
    - find the lowest common ancestor (LCA) node of two given nodes in the BST

The LCA is defined between two nodes p and q as the lowest node in T that has both p and q as descendants,
where we allow a node be a decendant of itself.

EXAMPLE:

                    6

            2               8

        0       4       7       9

            3       5

root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]

input: p = 2, q = 8
output: 6
- The LCA of nodes 2 and 8 is 6. (They are both descendants of 6)

input: p = 2, q = 4
output: 2
- The LCA of nodes 2 and 4 is 2. (A node can be a descendant of itself)

*/

// ===== RECURSION / DEPTH FIRST SEARCH
// TIME – O(log(n)), SPACE – O(1)
// time is log n because we only need to visit one node for every level in the tree
// the TC is the height of the tree
// no new data structures

/*
STEPS / BASE / EDGE CASES:

    - where the split occurs between p and q is where the LCA is
    - if p and q are greater than root.val, search on the right side of the subtree (where the higher values are)
    - if p and q are lower than root.val, search on the left side of the subtree (where the lower values are)

    - if one is lower and the other greater than root.val, the LCA is the root.val
    - if either p or q === root.val, the LCA is the root.val (it is a ancestor of itself and the other node)
    
*/

function lowestCommonAncestor(root, p, q) {
  // p and q are not going to be null
  let curr = root;

  while (curr) {
    // search the right subtree if both values are greater than root
    if (p.val > curr.val && q.val > curr.val) {
      curr = curr.right;
      // search the left subtree if both values are less than root
    } else if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left;
      // else this means between p and q, one value is greater and one value is lower than the root.val, the LCA is the root.val
      // so return the root/descendent value the loop is at when the split occurs
    } else {
      return curr;
    }
  }
}

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
