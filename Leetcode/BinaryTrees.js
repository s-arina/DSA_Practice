// ============================== PROBLEMS ==============================

/*
    - Invert Binary Tree
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
