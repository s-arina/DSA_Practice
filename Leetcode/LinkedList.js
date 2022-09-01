// ============================== PROBLEMS ==============================

/*
    - Linked List Cycle
    - Middle of Linked List
    to do:
    - Palindrome Linked List
    - Reversed Linked List
    - Remove Linked List Elements
    - Merged Two Linked Lists
    - Remove Duplicates from Sorted List
*/

// ============================== LINKED LIST CYCLE ==============================
// ============================== LINKED LIST CYCLE ==============================

/* Given head, the head of a linked list:
    - return true if the linked list has a cycle in it
    - else false if there isn't

There is a cycle in a linked list if:
    - there is some node in the list that can be reached again by continously following the next pointer

EXAMPLE:

    3  ->   2  ->  0  ->  -4 
            ^              v   
            |  <-   <-    <-  

input: head = [3, 2, 0, -4], position = 1
output: true
tail (4) does not point to null, points to 2, a cycle

*/

// ===== TWO POINTERS (FAST / SLOW)
// TIME – O(n), SPACE – O(1)

// imagine a circular track with two people running at different speeds
// the faster will always catch up with the slower person again, making a cycle

var hasCycle = function (head) {
  // start both pointers at head
  let slow = head;
  let fast = head;

  // while the fast node and a next node exists
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    // set fast as one node faster than slow
    // eventually they will meet again if there is a cycle (imagine a circle)
    if (slow === fast) return true;
  }
  return false;
};

console.log(hasCycle([3, 2, 0, -4])); // pos = 1, true
console.log(hasCycle([1])); // pos = -1, false

// ============================== MIDDLE OF LINKED LIST ==============================
// ============================== MIDDLE OF LINKED LIST ==============================

/* Given the head of a singly linked list:
    - return the middle node of the linked list
    - if there are two middle nodes, return the second middle node.
*/

// ===== TWO POINTERS
// TIME – O(n), SPACE – O(1)

var middleNode = function (head) {
  let half = head;
  let end = head;

  while (end && end.next) {
    half = half.next;
    end = end.next.next;
    // end is double the speed of half
    // when it end reaches the end of the list, half will be in the middle
  }
  return half;
};

console.log(middleNode([1, 2, 3, 4, 5])); // [3, 4, 5]
console.log(middleNode([1, 2, 3, 4, 5, 6])); // [4, 5, 6]

// ============================== PALINDROME LINKED LIST ==============================
// ============================== PALINDROME LINKED LIST ==============================

/* Given the head of a singly linked list:
    - return true if the list is a palindrome, else false
*/

// =====
// TIME – O(), SPACE – O()

// ============================== REVERSED LINKED LIST ==============================
// ============================== REVERSED LINKED LIST ==============================

/* Given the head of a linked list and an integer val:
    - remove all the nodes of the linked list that has Node.val == val
    - return the new head
*/

// =====
// TIME – O(n), SPACE – O(1)

function reverseList(head) {
  // we want the new head to be pointing to null after its reverse
  let prev = null;
  // track the current head
  let current = head;
  // 1 -> 2 -> 3 -> 4 -> 5
  // c

  // while the current node does not point to null
  while (current !== null) {
    next = current.next;
    // 1 -> 2 -> 3 -> 4 -> 5
    // c    n

    current.next = prev;
    // null <- 1   2 -> 3 -> 4 -> 5
    //   p     c   n

    prev = current;
    // null <- 1   2 -> 3 -> 4 -> 5
    //         c   n
    //         p

    current = next;
    // null <- 1   2 -> 3 -> 4 -> 5
    //         p   n
    //             c

    // next moves to 3 in the next iteration
  }

  return prev;
}

/*
input
    1 -> 2 -> 3 -> 4 -> 5 -> null

    notes:
    we need to keep track of previous, current, and next

    EXAMPLE:
    1) current = head --> 3, prev --> 2

    1 <- 2 -> 3 -> 4 -> 5 -> null
         p    c    

    2) next = current.next --> 4
      to keep the link from 3 -> 4 when it gets severed

    1 <- 2 -> 3 -> 4 -> 5 -> null
         p    c    n

    3) current.next = prev --> 2 store the previous value 
      this will erase the link from 3 -> 4 and set a link from to 2 <- 3, reversing it

    1 <- 2 <- 3    4 -> 5 -> null
         p    c    n
        c.n

    4) prev = current --> 3
      previous has to move to current now 

    1 <- 2 <- 3    4 -> 5 -> null
              c    n
         c.n  p

    5) current = next --> 4
      since the next node was saved on top, we can now move current (3) to the next node (4)

    1 <- 2 <- 3    4 -> 5 -> null
              p    n
         c.n       c

    6) return prev
      the new head

output
    null <- 1 <- 2 <- 3 <- 4 <- 5
*/
