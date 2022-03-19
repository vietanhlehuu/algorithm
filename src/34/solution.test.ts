import { detectCycle, ListNode } from "./solution";

describe("Question 34", () => {
  test("Test 34.1", () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2;

    const actual = detectCycle(node1);
    const expected = node2;

    expect(actual).toBe(expected);
  });

  test("Test 34.2", () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = null;

    const actual = detectCycle(node1);
    const expected = null;

    expect(actual).toBe(expected);
  });

  test("Test 34.3", () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);

    node1.next = node2;
    node2.next = node1;

    const actual = detectCycle(node1);
    const expected = node1;

    expect(actual).toBe(expected);
  });
});
