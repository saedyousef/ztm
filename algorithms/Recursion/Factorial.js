
function findFactorialRecursive(number)
{
    if(number <= 2)
        return number;
    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number)
{
    let result = 1;
    for(let i = 2; i <= number; i++)
    {
        result = result * i;
    }

    return result;
}