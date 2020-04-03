<?php
// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Source : https://leetcode.com/problems/rotate-array/description/

class Rotation{
    public function rotate(&$array, $steps, $len)
    {
        while ($steps < $len) 
        { 
            $temp = $array[$steps]; 
            $array[$steps] = $array[$len]; 
            $array[$len] = $temp; 
            $steps++; 
            $len--; 
        } 
    }

    function rightRotate(&$array, $d, $n) 
    { 
        $this->rotate($array, 0, $n - 1); // reverse the elements
        $this->rotate($array, $d, $n - 1);

        return $array;
    }
}
// Driver code
$rotation = new Rotation();
$array = [1,2,3,4,5,6];
$len = sizeof($array);
print_r($rotation->rightRotate($array, 7, $len));