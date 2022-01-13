import Stack from "./stack";
import { reverseStack, reverseStack2 } from "./solution";

describe("Question 12", () => {
  test("Test 12.1", () => {
    const input = new Stack();
    input.push(1).push(2).push(3).push(4).push(5);
    const output = new Stack();
    output.push(5).push(4).push(3).push(2).push(1);
    reverseStack(input);
    expect(input.getStack()).toEqual(output.getStack());
  });

  test("Test 12.2", () => {
    const input = new Stack();
    input.push(1).push(2).push(3).push(4).push(5);
    const output = new Stack();
    output.push(5).push(4).push(3).push(2).push(1);
    reverseStack2(input);
    expect(input.getStack()).toEqual(output.getStack());
  });
});
