import Stack from "./stack.js";

export function reverseStack(stack: Stack): void {
  reverse(stack);
}

function reverse(stack: Stack, callback?: () => void) {
  if (stack.isEmpty() && callback) {
    callback();
    return;
  }

  if (stack.isEmpty()) {
    return;
  }

  const value = stack.pop();
  reverse(stack, () => {
    if (callback) {
      callback();
    }
    stack.push(value);
  });
}

export function reverseStack2(stack: Stack): void {
  if (!stack.isEmpty()) {
    const value = stack.pop();
    // Reverse the stack, then insert the value to the bottom
    reverseStack2(stack);
    insertToBottom(stack, value);
  }
}

function insertToBottom(stack: Stack, item: number) {
  if (stack.isEmpty()) {
    stack.push(item);
    return;
  }
  const value = stack.pop();
  // move this item to the bottom
  insertToBottom(stack, item);
  stack.push(value);
}
