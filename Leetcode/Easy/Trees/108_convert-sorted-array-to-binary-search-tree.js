// ============================== CONVERT SORTED ARRAY TO BST ==============================
// ============================== CONVERT SORTED ARRAY TO BST ==============================

/* 
Given an integer array nums where the elements are sorted in ascrighting order:
    - convert it to a height-balanced binary search tree

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

EXAMPLE:

            0

        -3      9

    -10     5

input: nums = [-10, -3, 0, 5, 9]
output: [0, -3, 9, -10, null, 5]
- both sides of the tree are balanced in the amount of nodes
*/

// ===== THREE POINTERS
// TIME – O(n), SPACE – O(n)
// hitting every node once
// creating a new tree node

var sortedArrayToBST = function (nums, left = 0, right = nums.length - 1) {
  // declare left/right pointers as variables as they will be changed when called recursively

  // tldr: executing binary search method on left and right sides of the array
  // to distribute right/left nodes appropriately and in order

  // nothing to use through as the first element cannot be greater than the last if the array is sorted
  if (left > right) return null;

  // store midpoint as reference
  let mid = Math.floor((left + right) / 2);

  // create a new tree with the root as the midpoint
  let root = new TreeNode(nums[mid]);

  // call the function again to assign left/right values

  // left values are less than, search the left side with mid - 1 as the right (end) pointer
  root.left = sortedArrayToBST(nums, left, mid - 1);
  // right values are greater than, search the right side with mid + 1 as the left (start) pointer
  root.right = sortedArrayToBST(nums, mid - 1, right);

  return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9])); // [0, -3, 9, -10, null, 5]
console.log(sortedArrayToBST([1, 3])); // [3, 1]
