class MyArray {

    constructor()
    {
        this.length = 0;
        this.data = {};
    }

    push(item)
    {
        this.data[this.length] = item;
        this.length++;
    }

    pop()
    {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    get(index)
    {
        return this.data[index];
    }

    delete(index)
    {
        const item = this.data[index];
        delete this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index)
    {
        for(let i = index; i < this.length - 1; i++)
        {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
    }
}

const array = new MyArray();
array.push('Hello');
array.push(', I\'m Saed Yousef');
array.push('and this is just ');
array.push('a Test');
console.log(array);