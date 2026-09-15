class Queue {
  constructor() {
    this.items = [];
    // 队头指针：不搬移数组，只记录队头下标
    this.head = 0;
  }

  // 入队 O(1) 均摊
  enqueue(element) {
    this.items.push(element);
  }

  // 出队 O(1) 均摊（含压缩）
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const frontElement = this.items[this.head];
    // 断开引用，让已出队元素可被 GC 回收
    this.items[this.head] = undefined;
    this.head++;
    // 已出队部分过半时压缩一次：单次 O(n)，但均摊下来仍是 O(1)，
    // 把空间占用从 O(累计入队总数) 降回 O(当前元素数)
    if (this.head * 2 >= this.items.length) {
      this.items = this.items.slice(this.head);
      this.head = 0;
    }
    return frontElement;
  }

  // 查看队头 O(1)
  front() {
    return this.isEmpty() ? undefined : this.items[this.head];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.items.length - this.head;
  }

  // 只返回未出队的元素
  toArray() {
    return this.items.slice(this.head);
  }

  print() {
    console.log(this.toArray().toString());
  }
}
