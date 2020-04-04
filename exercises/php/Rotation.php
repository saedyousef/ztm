<?php

class Rotation{

    /**
     * @param Array[] $nums
     * @param Integer $k
     * @param Integer $n
     * @return Integer[]
     * @source https://leetcode.com/problems/rotate-array/description/
     */
    public function rotate(&$nums, $k, $n)
    {
        while ($k < $n) 
        { 
            $temp = $nums[$k]; 
            $nums[$k] = $nums[$n]; 
            $nums[$n] = $temp; 
            $k++; 
            $n--; 
        } 
    }

    function rightRotate(&$nums, $d, $n) 
    { 
        $this->rotate($nums, 0, $n - 1); // reverse the elements
        $this->rotate($nums, $d, $n - 1);

        return $array;
    }
}
// Driver code
$rotation = new Rotation();
$array = [1,2,3,4,5,6];
$n = sizeof($array);
print_r($rotation->rightRotate($array, 7, $n));