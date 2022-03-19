export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function findLengthOfCycle(head: ListNode): number {
  let node = head;
  let count = 0;

  do {
    node = node.next!;
    count++;
  } while (node != head);

  return count;
}

export function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow!.next;
    fast = fast.next.next;

    // if the linked list have a cycle, fast and slow will meet each other
    if (fast == slow) {
      const count = findLengthOfCycle(slow!);
      let node1 = head;
      let node2 = head;

      for (let i = 0; i < count; i++) {
        node2 = node2!.next;
      }

      // move node1 and node2 with the distance is K + 1 (with K is the length of cycle)
      // when node2 go to the end of the cycle, node1 and node2 continue to move and meet each other at start of the cycle
      while (node1 != node2) {
        node1 = node1!.next;
        node2 = node2!.next;
      }

      return node1;
    }
  }

  return null;
}
