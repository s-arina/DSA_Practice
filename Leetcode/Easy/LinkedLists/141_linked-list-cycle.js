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
