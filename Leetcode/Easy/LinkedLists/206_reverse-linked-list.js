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
