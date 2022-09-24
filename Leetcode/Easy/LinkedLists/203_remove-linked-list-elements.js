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
