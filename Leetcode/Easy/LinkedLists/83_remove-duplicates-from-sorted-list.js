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
