class QueueUsingStack {
    constructor() {
        this.first = [];
        this.last = [];
    }

    enqueue(value) {
        const length = this.first.length;
        for (let i = 0; i < length; i++) this.last.push(this.first.pop());

        this.last.push(value);
        return this;
    }

    dequeue() {
        const length = this.last.length;
        for (let i = 0; i < length; i++) this.first.push(this.last.pop());

        this.first.pop();
        return this;
    }
    peek() {
        if (this.last.length > 0) return this.last[0];

        return this.first[this.first.length - 1];
    }
}

// Driver Code
const queue = new QueueUsingStack();
queue.peek();
queue.enqueue('Saed');
queue.enqueue('Qusay');
queue.enqueue('Yousef');
queue.peek();
queue.dequeue();
queue.peek();
