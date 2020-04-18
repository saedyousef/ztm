class Quick
{
    sort(array, left, right)
    {
        let pivot;
        let partitionIndex;

        if(left < right)
        {
            pivot = right;
            partitionIndex = this.partition(array, pivot, left, right);

            this.sort(array, left, partitionIndex - 1);
            this.sort(array, partitionIndex + 1, right);
        }
        return array;
    }

    partition(array, pivot, left, right)
    {
        let pivotValue = array[pivot];
        let partitionIndex = left;

        for(let i = left; i < right; i++)
        {
            if(array[i] < pivotValue)
            {
                this.swap(array, i, partitionIndex);
                partitionIndex++;
            }
        }
        this.swap(array, right, partitionIndex);
        return partitionIndex;
    }

    swap(array, firstIndex, secondIndex)
    {
        var temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    }
}

// Driver code
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
quick = new Quick();
console.log(quick.sort(numbers, 0, numbers.length - 1));