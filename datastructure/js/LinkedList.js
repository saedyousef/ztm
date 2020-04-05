// Include the class Node to instantiate the node abject
class LinkedList{

    constructor(value){
      this.head = {
        value: value,
        next: null
      }
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value){
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
  
      return true;
    }
  
    prepend(value)
    {
        const newNode = new Node(value);
        newNode.next = this.head;
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

      let leader = this.traverseToIndex(index -1);
      const newNode = new Node(value);
      newNode.next = leader.next;
      leader.next = newNode;
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
    // 1 --> 2 --> 3 --> 4
    // More cases need to be handled, like should chnage the head and tail nodes in some cases
    remove(index)
    {
        if(index === 0 && this.length === 1)
        {
          this.head = null;
          this.tail = null;
          this.length = 0;
          return false;
        }
        if(index > this.length)
            return false;
        const leader = this.traverseToIndex(index -1)
        console.log(leader);
        const unwantedNode = leader.next;
        if(unwantedNode === null)// If the wanted node is the tail
        {
            leader.next = null;
            this.tail = leader;
            return true;
        }
        else
            leader.next = unwantedNode.next;
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
  let list = new LinkedList(1);
  list.append(3);
  list.prepend(2);
  list.insert(3, 4);
  list.insert(30, 5);
  list.remove(2);
  list.printList();