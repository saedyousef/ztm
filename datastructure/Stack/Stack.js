class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.top = newNode;
            this.bottom = newNode;
            this.length++;
        } else {
            const pointer = this.top;
            this.top = newNode;
            this.top.next = pointer;
            this.length++;
        }

        return this;
    }

    pop() {
        if (this.isEmpty()) return this;

        if (this.length === 1) this.bottom = null;

        this.top = this.top.next;
        this.length--;

        return this;
    }

    peek() {
        if (this.isEmpty()) return false;

        return this.top.value;
    }

    isEmpty() {
        if (this.length === 0 || this.top === null) return true;

        return false;
    }
}
