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
