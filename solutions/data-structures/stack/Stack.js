export default class Stack {
  constructor() {
    this.store = [];
  }

  isEmpty() {
    return !this.store.length;
  }

  peek() {
    if (this.isEmpty()) {
      return;
    }

    return this.store[this.store.length - 1];
  }

  push(el) {
    return this.store.push(el);
  }

  pop() {
    return this.store.pop();
  }

  toString() {
    return this.store.toString();
  }
}
