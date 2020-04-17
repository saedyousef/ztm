class BubbleSort
{
    sort(array)
    {
        for(let i = 0; i < array.length; i++)
        {
            for(let j = 0; j < array.length; j++)
            {
                if(array[j] > array[j+1])
                {
                    let temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }
    }
}// Space Complexity is O(1), time Complexity is very bad for large inputs O(n^2)

// Driver code
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
bubbleSort = new BubbleSort();
bubbleSort.sort(numbers);