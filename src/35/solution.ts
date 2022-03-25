export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 Do not return anything, modify head in-place instead.
 */
function reverseLinkedList(head: ListNode): ListNode {
  let prev: ListNode | null = null;

  let current: ListNode | null = head;
  while (current) {
    const next: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev as ListNode;
}

export function reorderList(head: ListNode | null): void {
  // find the middle
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // slow -> mid
  const lastNode = reverseLinkedList(slow!);

  let left = head,
    right = lastNode;

  while (left?.next && right?.next) {
    const nextLeft = left.next;
    const nextRight = right.next;
    left.next = right;
    right.next = nextLeft;
    left = nextLeft;
    right = nextRight;
  }
}
