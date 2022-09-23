// ============================== PROBLEMS ==============================

/*
    - Linked List Cycle
    - Middle of Linked List
    - Palindrome Linked List
    - Reversed Linked List
    - Remove Linked List Elements
    - Remove Duplicates from Sorted List
    - Merged Two Linked Lists
*/

// ============================== LINKED LIST CYCLE ==============================
// ============================== LINKED LIST CYCLE ==============================

/* 
Given head, the head of a linked list:
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

function hasCycle(head) {
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
}

console.log(hasCycle([3, 2, 0, -4])); // pos = 1, true
console.log(hasCycle([1])); // pos = -1, false

// ============================== MIDDLE OF LINKED LIST ==============================
// ============================== MIDDLE OF LINKED LIST ==============================

/* 
Given the head of a singly linked list:
    - return the middle node of the linked list
    - if there are two middle nodes, return the second middle node.
*/

// ===== TWO POINTERS
// TIME – O(n), SPACE – O(1)

function middleNode(head) {
  let half = head;
  let end = head;

  while (end && end.next) {
    half = half.next;
    end = end.next.next;
    // end is double the speed of half
    // when it end reaches the end of the list, half will be in the middle
  }
  return half;
}

// ============================== PALINDROME LINKED LIST ==============================
// ============================== PALINDROME LINKED LIST ==============================

/* 
Given the head of a singly linked list:
    - return true if the list is a palindrome, else false
*/

// ===== HELPER FUNCTIONS (TWO POINTERS MOSTLY)
// TIME – O(n), SPACE – O(1)

/*
THE IDEA:
  - get the middle node of the list
  - reverse the second half of the list starting from the midpoint onwards
  - compare the initial list to the nodes of the reversed half
  - if all the nodes match, it's a palindrome list

NOTES:
  - 3 helper functions (middle of list, reverse list, compare lists)

EXAMPLE:

input
  1 -> 2 -> 3 -> 2 -> 1 

  1) find the middle

  3 -> 2 -> 1

  2) reverse it from the midpoint

  1 -> 2 -> 3

  3) compare the values of the reversed list to the values of the initial list

  1 -> 2 -> 3 -> 2 -> 1

  1 -> 2 -> 3

  MATCH === PALINDROME
*/

// find the middle node of a list
function middleHelper(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// reverse a list
function reverseHelper(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// compare two lists
function compareHelper(list1, list2) {
  // while they exist
  while (list1 && list2) {
    // if any values don't match up in order, false, not equal lists
    if (list1.val !== list2.val) return false;
    // otherwise move onto the next nodes and compare again
    list1 = list1.next;
    list2 = list2.next;
  }
  // if loop finishes, true, equal lists
  return true;
}

function palindromeList(head) {
  // 1) find the middle node
  const midpoint = middleHelper(head);
  // 2) reverse the second half of the linked list starting from the midpoint
  const reversedTail = reverseHelper(midpoint);
  // 3) compare the first half to the second half of the list
  return compareHelper(head, reversedTail);
  // if they're the same, it's a palindrome list
}

// ============================== REVERSED LINKED LIST ==============================
// ============================== REVERSED LINKED LIST ==============================

/* 
Given the head of a singly linked list:
    - reverse the list and return it
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

  // while the current node exists
  while (current) {
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

    NOTES:
    - we need to keep track of previous, current, and next

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

// ============================== REMOVE LINKED LIST ELEMENTS ==============================
// ============================== REMOVE LINKED LIST ELEMENTS ==============================

/* 
Given the head of a linked list and an integer val:
    - remove all the nodes of the linked list that has Node.val == val
    - return the new head
*/

// ===== TWO POINTERS (AND DUMMY NODE)
// TIME – O(n), SPACE – O(1)

function removeElementDummy(head, val) {
  // dummy node can be any value
  let dummy = new ListNode(-1);
  // its next is the current head
  dummy.next = head;
  // set prev to be the prev node (dummy, usually null!)
  let prev = dummy;
  let curr = head;

  // while the current node exists
  while (curr) {
    // keep track of the node after the current one
    next = curr.next;
    // if the node value matches the value passed in
    if (curr.val === val) {
      // point prev.next to curr.next to sever the link from the current node
      prev.next = next;
      // move onto the next node
      curr = curr.next;
      // else if the node value does NOT match the value passed in
    } else {
      // no need to sever link, move pointers along
      prev = curr;
      curr = curr.next;
    }
  }
  // if the first/a node was removed, the dummy will have already been pointing to the new head
  return dummy.next;
}

/*
input
    1 -> 2 -> 6 -> 3

    NOTES:
    - we need to keep track of previous, current, and next
    - EDGE CASE: the first node is the value to be removed
    - prev has to be an actual node instead of null
  
    EXAMPLE:
    - REMOVE: 1

    1) let dummy = new ListNode(-1);
       dummy.next = head;
    - create a dummy node before the current head node

    dummy(-1) -> 1 -> 2 -> 6 -> 3
       
    2) let prev = dummy;
       let curr = head;
    - set prev to be the dummy (usually null)
    - set curr to be the current head to track

    3) next = curr.next;
    - keep track of the next node
    
    dummy(-1) -> 1 -> 2 -> 6 -> 3
        p        c    n

    4a) if (curr.val === val) {
        prev.next = next;
        curr = curr.next;
    }
    - if the current node val matches the val passed in
    - point prev.next to curr.next to sever the link from the current node
    - then move onto the next node

    dummy(-1)    1    2 -> 6 -> 3
        p             c    n
                     p.n

    5) return dummy.next;
    - when current reaches null and all values were removed, return the list with dummy.next
    - as it was set from the beginning to always point to the head

         -------------
        |             |
        |             v
    dummy(-1)         2 -> 6 -> 3 -> null
        p                       c    n
                    
    4b) else (if curr.val !== val)
        prev = curr;
        curr = curr.next;
    - shift the two pointers ahead and continue checking through the list
*/

// ===== NO DUMMY NODE
// TIME – O(n), SPACE – O(1)

function removeElement(head, val) {
  // if a head doesn't exist, return it
  if (!head) return head;

  let curr = head;

  while (curr && curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head.val === val ? head.next : head;
}

/*
input
  1 -> 2 -> 6 -> 3 -> 4

  REMOVE: 6

  1) while (curr & curr.next)
  - while a head and its next node exists

  1 -> 2 -> 6 -> 3 -> 4
  c   c.n

  2a) if (curr.next.val === val) = FALSE
  3a) curr = curr.next
  - move onto the next node

  1 -> 2 -> 6 -> 3 -> 4
       c   c.n


  2b) if (curr.next.val === val) = TRUE
  3b) curr.next = curr.next.next
  - change the next pointer to skip the given node to sever and remove it from the list

         --------------
         ^            |
         |            v
  1  ->  2    6       3 -> 4
         c   c.n -> c.n.n

  4) return head.val === val ? head.next : head

  5a) 1 !== 6, return head:
  2 -> 3 -> 4

  IF REMOVE: 1

  1 -> 2 -> 6 -> 3 -> 4
  h

  5b) 1 === 1, return head.next
  - return the node after the initial head if the it's the first one to be removed

  1 -> 2 -> 6 -> 3 -> 4
  h -> h.n

  return head:
  2 -> 6 -> 3 -> 4
  h

*/

// ============================== REMOVE DUPLICATES FROM SORTED LIST ==============================
// ============================== REMOVE DUPLICATES FROM SORTED LIST ==============================

/*
Given the head of a sorted list:
    - delete all duplicates such that each element appears only once
    - return the new sorted list
*/

// ===== ONE POINTER
// TIME – O(n), SPACE – O(1)

function removeDuplicate(head) {
  let curr = head;

  // while head and its next node exists
  while (curr && curr.next) {
    // if the current node value matches the next nodes value
    if (curr.val === curr.next.val) {
      // sever the link to the next node and connect it to the next next node
      curr.next = curr.next.next;
    } else {
      // otherwise move along normally to the next node
      curr = curr.next;
    }
  }
  // return the new list
  return head;
}

// ============================== MERGE TWO SORTED LISTS ==============================
// ============================== MERGE TWO SORTED LISTS ==============================

/* 
Given the heads of two sorted linked lists:
    - merge the two lists into one SORTED list
    - the list should be made by splicing together the nodes of the first two lists
*/

// ===== NEW LIST / DUMMY NODE
// TIME – O(n), SPACE – O(1)

function mergeLists(list1, list2) {
  // initialize a new list
  let curr = new ListNode();

  // create a dummy node to store the new node
  let dummy = curr;

  // while both lists exist
  while (list1 && list2) {
    // if a node in list1 is <= a node in list2
    if (list1.val <= list2.val) {
      // link curr to the list1 node first
      curr.next = list1;
      // move to the next node in the list
      list1 = list1.next;
    } else {
      // else, link curr to the list2 node first
      curr.next = list2;
      // move to the next node in the list
      list2 = list2.next;
    }

    // move to the next node in the new list so the node that was just set isn't overwritten
    curr = curr.next;
  }

  // if one of the lists has no more nodes to compare,
  // point curr.next to the remaining nodes in the other list
  // if they're both empty, curr.next will point to null
  curr.next = list1 || list2;

  // returning curr will return the last node that was added
  // returning dummy will return a value (0)
  // return the next node to get the head of the newly merged list
  return dummy.next;
}

/*

input
  list1:
  1 -> 2 -> 4

  list2:
  1 -> 3 -> 4

output
  1 -> 1 -> 2 -> 3 -> 4 -> 4

  REMOVE: 6

  */
