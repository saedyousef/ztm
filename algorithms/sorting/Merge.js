class Merge
{
    sort(array)
    {
        if(array.length === 1)
            return array;
        
        const length = array.length;
        const middile = Math.floor(length / 2);
        const left = array.slice(0, middile);
        const right = array.slice(middile);

        return this.merge(
            this.sort(left),
            this.sort(right)
        );
    }

    merge(left, right)
    {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;
        while(leftIndex < left.length && rightIndex < right.length)
        {
            if(left[leftIndex] < right[rightIndex])
            {
                result.push(left[leftIndex]);
                leftIndex++;
            }else
            {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
        
        return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
    }
}// Time Complexity O(n log(n)), space Complexity O(n)

// Driver code
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

merge = new Merge();
merge.sort(numbers);
console.log(merge.sort(numbers));