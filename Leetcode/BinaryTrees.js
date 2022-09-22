// ============================== PROBLEMS ==============================

/*
    - Invert Binary Tree
    - Maximum Depth of Binary Tree
*/

// ============================== INVERT BINARY TREE ==============================
// ============================== INVERT BINARY TREE ==============================

/* Given the root of a binary tree:
    - invert the tree
    - return its root

EXAMPLE:

        2        ->       2
    1       3         3       1

input: root = [2, 1, 3]
output: [2, 3, 1]

*/

// ===== RECURSION
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

/* Given the root of a binary tree:
    - return its maxiumum depth

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

EXAMPLE:

        3

    9       20

        15      7

input: root = [3, 9, 20, null, null, 15, 7]
output: 3

NOTES:
    - trees are recursive data structures because the right/left child of a root are trees of their own
*/

// =====
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
