
// First method to reverse string:
function reverseString(str)
{
    let arrayString = str.split("");
    let reversedString = [];

    // Using closure
    function addToArray(array)
    {
        if(array.length > 0)
        {
            reversedString.push(array.pop());
            addToArray(array);
        }
        return;
    }
    addToArray(arrayString);
    return reversedString.join("");
}

// Driver code
reverseString("Hello my dear");

// Second method to reverse a string

function reverseStringRecursive(str)
{
    if(str === "")
        return "";
    else
        return reverseStringRecursive(str.substr(1)) + str.charAt(0);
}

// Driver code
reverseStringRecursive("Hello my dear");