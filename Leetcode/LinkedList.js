// ============================== PROBLEMS ==============================

/*
    - Linked List Cycle
    - Middle of Linked List
    - Palindrome Linked List
*/

// ============================== LINKED LIST CYCLE ==============================
// ============================== LINKED LIST CYCLE ==============================

/* Given head, the head of a linked list:
    - return true if the linked list has a cycle in it
    - else false if there isn't

There is a cycle in a linked list if:
    - there is some node in the list that can be reached again by continously following the next pointer
*/

// ===== TWO POINTERS (FAST / SLOW)
// TIME – O(n), SPACE – O(1)

// imagine a circular track with two people running at different speeds
// the faster will always catch up with the slower person again, making a cycle

var hasCycle = function (head) {
  // start the pointer at head
  let fast = head;
  // while the fast node and a next node exists
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    // set fast as one node faster than head, eventually they'll meet again
    if (head === fast) return true;
  }
  return false;
};

console.log(hasCycle([3, 2, 0, -4])); // pos = 1, true
console.log(hasCycle([1])); // pos = -1, false

// ============================== MIDDLE OF LINKED LIST ==============================
// ============================== MIDDLE OF LINKED LIST ==============================

/* Given the head of a singly linked list:
    - return the middle node of the linked list

If there are two middle nodes, return the second middle node.
*/

// ===== TWO POINTERS (FAST / SLOW)
// TIME – O(n), SPACE – O(1)

var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    // fast is double the speed of slow
    // when it reaches the end of the list, slow will be in the middle
    fast = fast.next.next;
  }
  return slow;
};

console.log(middleNode([1, 2, 3, 4, 5])); // [3, 4, 5]
console.log(middleNode([1, 2, 3, 4, 5, 6])); // [4, 5, 6]

// ============================== PALINDROME LINKED LIST ==============================
// ============================== PALINDROME LINKED LIST ==============================

/* Given the head of a singly linked list:
    - return true if it is a palindrome
    - else false if not
*/

// =====
// TIME – O(n), SPACE – O(1)

// ============================== REVERSED ELEMENTS ==============================
// ============================== REVERSED ELEMENTS ==============================

/* Given the head of a linked list and an integer val:
    - remove all the nodes of the linked list that hass Node.val == val
    - return the new head
*/

// =====
// TIME – O(n), SPACE – O(1)
