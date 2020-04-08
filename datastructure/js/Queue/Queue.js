class Node{
    constructor(value)
    {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue{
    constructor()
    {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
  
    peek()
    {
      return this.first;
    }
  
    enqueue(value)
    {
      const newNode = new Node(value);
      if(this.isEmpty())
      {
        this.first = newNode;
        this.last = newNode;
        this.length++;
        return this;
      }
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
  
      return this;
    }
  
    dequeue()
    {
      if(this.isEmpty())
        return this;
      if(this.first === this.last)
      {
        this.last = null;
      }
      const pointer = this.first.next;
      this.first = pointer;
      this.length--;
      return this;
    }
  
    isEmpty()
    {
      if(this.length === 0)
        return true;
  
      return false;
    }
  }
  
  queue = new Queue();
  queue.enqueue(10)
  queue.enqueue(20)
  queue.enqueue(30)
  queue.dequeue()
  queue.dequeue()
  queue.dequeue()
  
  
  