/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 // Insertion Sort
var sortColors = function(nums) {
    let key,j
    for(let i =0;i <nums.length; i++){
         key = nums[i];
        let j = i-1;
        while(j >=0 && nums[j] > key){
            nums[j+1] = nums[j];
            j--;
        }
        nums[j+1] = key
    }
    return nums
};