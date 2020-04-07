
class Node {
constructor(value)
    {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
  
class DoublyLinkedList
{
  
    constructor(value)
    {
        this.head =
        {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    
    append(value)
    {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;

    return true;
    }
    
    prepend(value)
    {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return true;
    }
    
    insert(index, value)
    {
    if(index === 0)
        return this.prepend(value);

    if(index >= this.length)
        return this.append(value);

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index -1);
    const follower = leader.next;
    newNode.next = follower;
    leader.next = newNode;
    newNode.prev = leader;
    follower.prev = newNode
    this.length++;

    return true;
    }
    
    traverseToIndex(index)
    {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index)
    {
        currentNode = currentNode.next;
        counter++;
    }

    return currentNode;
    }
   
    remove(index)
    {
        if(index === 0 && this.length === 1)
        {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return this;
        }else if(index === 0)
        {
            const unwantedNode = this.head;
            const follower = unwantedNode.next;
            follower.prev = null;
            this.head = follower;
            this.length--;

            return this;
        }
        if(index >= this.length)
        {
        const unwantedNode = this.tail.prev;
        unwantedNode.next = null;
        this.length--;

        return this;
        }
        
        const leader = this.traverseToIndex(index -1);
        const unwantedNode = leader.next;
        const follower = unwantedNode.next;
        leader.next = follower;
        follower.prev = leader;

        this.length--;
        return true;
    }
  
    printList()
    {
    let array = [];
    let currentNode = this.head;
    while(currentNode !== null)
    {
        array.push(currentNode.value);
        currentNode = currentNode.next;
    }

    return array;
    }
}
  
      // Driver code
    let list = new DoublyLinkedList(1);
    list.append(3);
    list.insert(3, 4);
    list.insert(1, 2);
    list.insert(4, 2);
    list.remove(1);
    list.printList();
    console.log(list);
  