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
