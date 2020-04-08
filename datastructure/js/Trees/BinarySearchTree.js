class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      const node = new Node(value);
      if(this.root === null){
        this.root = node;
      }else
      {
        let pointer = this.root;
        while(true)
        {
          if(value < pointer.value)
          {
            // Left
            if(!pointer.left){
              pointer.left = node;
              return this;
            }
            pointer = pointer.left
          }else
          {
            //Right
            if(!pointer.right)
            {
              pointer.right = node;
              return this;
            }
            pointer = pointer.right;
          }
        }
      }
    }
    lookup(value){
      //Code here
    }
    // remove
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  JSON.stringify(traverse(tree.root))
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }