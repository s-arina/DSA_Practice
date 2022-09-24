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
