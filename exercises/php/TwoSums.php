<?php
class TwoSums {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     * @source https://leetcode.com/problems/two-sum/
     */
    function twoSum($nums, $target) {
        
        $map = [];
        for($i = 0; $i < sizeof($nums); $i++)
        {
            if(isset($map[$target - $nums[$i]]))
            {
              return [$map[$target - $nums[$i]], $i];
              break;
            }

           $map[$nums[$i]] = $i;
            
        }
        throw new Exception("No two sum solution");
    }

}// Time complexity : O(n), Space complexity : O(n)

// Driver code
$sol = new TwoSums();
$nums = [2,7,4,5];
$result = $sol->twoSum($nums, 9);
print_r($result);