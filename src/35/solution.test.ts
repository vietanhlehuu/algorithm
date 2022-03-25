import { ListNode, reorderList } from "./solution";

describe("Question 35", () => {
  test("Test 35.1", () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    reorderList(node1);

    expect(node1.next).toEqual(node4);
    expect(node4.next).toEqual(node2);
    expect(node2.next).toEqual(node3);
    expect(node3.next).toEqual(null);
  });

  test("Test 35.2", () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);
    const node5 = new ListNode(5);
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    reorderList(node1);

    expect(node1.next).toEqual(node5);
    expect(node5.next).toEqual(node2);
    expect(node2.next).toEqual(node4);
    expect(node4.next).toEqual(node3);
    expect(node3.next).toEqual(null);
  });
});
