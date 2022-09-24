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
