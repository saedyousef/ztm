// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4];
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4];
// It should return 1

// Given an array = [2,3,4,5];
// It should return undefined

// Using hashtable is the most efficent way
function firstRecurringCharacter(array)
{
    let map = {};

    for(let i = 0; i < array.length; i++)
    {
        if(map[array[i]]) // If the key is already exists, then return the value
            return array[i];

        map[array[i]] = true;
    }

    return undefined;
}

// Driver code
firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);