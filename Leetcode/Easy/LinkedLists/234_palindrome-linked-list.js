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
