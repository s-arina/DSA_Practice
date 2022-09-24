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
