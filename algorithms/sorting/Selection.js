class Selection
{
    sort(array)
    {
        // Do your validation before you go for loops
        const length = array.length;
        for(let i = 0; i < length; i++)
        {
            //Set current index as minimum
            let min = i;
            let temp = array[i];
            for(let j = 0; j < length; j++)
            {
                if(array[j] < array[min])
                    min = j; // Update the current minimum
            }

            array[i] = array[min]; // swapping Indices
            array[min] = temp; // which is the previous minimum 
        }
        return array;
    }
} // Space Complexity O(1), time Complexity O(n^2)

// Driver code
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
selection = new Selection();
console.log(selection.sort(numbers));
