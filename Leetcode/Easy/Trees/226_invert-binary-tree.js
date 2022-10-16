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

var invertTree = function (root) {
  if (!root) return root;

  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};
