class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const map = new Map();
        for(let i=0; i<nums.length; i++){
            if(map.has(target-nums[i])){
                return [map.get(target-nums[i]), i]
            }
            map.set(nums[i], i)
        }
        // let arr = [];
        // for(let i=0; i<nums.length-1; i++){
        //     for(let j=i+1; j<=nums.length; j++){
        //         if(nums[i]+ nums[j] == target){
        //             arr[0] = i;
        //             arr[1] = j;
        //         }
        //     }
        // }
        // return arr;
    }
}
