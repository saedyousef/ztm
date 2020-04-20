function fibonacciIterative(number)
{
    let array = [0, 1];
    for(let i = 2; i < number + 1; i++)
    {
        array.push(array[i - 2] + array[i - 1]);
    }

    return array[number];
}// time complexity O(n)

// Driver code
// fibonacciIterative(5); //result 5
function fibonacciRecursive(number)
{
    if(number < 2)
        return number;
    
    return fibonacciRecursive(number - 2) + fibonacciRecursive(number - 1);
}// time complexity O(2 ^n)
// Driver code
fibonacciRecursive(5); 