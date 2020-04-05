class HashTable {
    constructor(size)
    {
      this.data = new Array(size);
    }
  
    _hash(key){
      let hash = 0;
      for(let i= 0; i< key.length; i++){
        hash = (hash+ key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }// O(1)
  
    set(key, value)
    {
      let address = this._hash(key);
      if(!this.data[address]){
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
  
      return this.data;
    }// O(1)

    get(key)
    {
       return this.data[this._hash[key]];
    }// O(1), lookup in hash tables very fast
  
    keys()
    {
      if(!this.data.length)
        return undefined;
      
      let keysArray = [];
      for(let i = 0; i < this.data.length; i++)
      {
        if(this.data[i] && this.data[i].length)
        {
          if(this.data[i].length > 1)
          {
            for(let j = 0; j < this.data[i]; j++)
            {
              keysArray.push(this.data[i][j][0]);
            }
          }else
            keysArray.push(this.data[i][0]);
        }
      }
    } // if there collision exists then O(i * j), otherwise it's would be O(1)
}

  // driver code
  const hashTable = new HashTable(50);
  hashTable.set('apples', 10);
  hashTable.set('grapes', 20);
  hashTable.set('oranges', 30);
  hashTable.get('grapes');
  hashTable.keys();
  