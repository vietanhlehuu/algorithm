// This file is from the internet

export default class Stack {
  // constructor
  stack: number[];
  constructor() {
    this.stack = [];
  }

  // push an element in stack
  push(newData: number) {
    this.stack.unshift(newData);
    return this;
  }

  // check whether stack is empty or not
  isEmpty() {
    if (this.stack.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  // pop element from the top of the stack
  pop() {
    if (this.isEmpty() == false) {
      const temp = this.stack[0];
      this.stack = this.stack.slice(1);
      return temp;
    } else {
      throw new Error("End of Stack reached");
    }
  }

  // function for printing stack
  getStack() {
    return this.stack;
  }
}
