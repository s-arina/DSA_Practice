// ============================== PROBLEMS ==============================

/*
    - Invert Binary Tree
    - Maximum Depth of Binary Tree
    - Same Tree
    - Subtree of Another Tree

NOTES:
    - trees are recursive data structures because the right/left child of a root are trees of their own
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

// ===== RECURSION
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

// ===== RECURSION
// TIME – O(n), SPACE – O(n)
// n is the shortest number of nodes between p and q
// we're only going to iterate through the shortest one
// beacuse if the other one is longer, it's automatically false

/*

STEPS / BASE / EDGE CASES:
    TRUE IF:
    - if p and q are both null

    FALSE IF:
    - if p is null and q isn't
    - if q is null and p isn't
    - if p.val and q.val aren't the same (the root node)

    ELSE:
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

/* Given the roots of two binary trees root and subRoot:
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

// ===== RECURSION
// TIME – O(n), SPACE – O(n)

/*
STEPS / BASE / EDGE CASES:

    for sameTree helper function:
        TRUE IF:
        - if root and subRoot are both null

    for isSubTree function:
        TRUE IF:
        - if root and subRoot are both null (a null subtree is a subtree of another null subtree)
        - subRoot is null but root isn't (a child node with no children of it's own are technically null as well)

        FALSE IF:
        - root is null but subRoot isn't
*/

function isSubTree(p, q) {}
