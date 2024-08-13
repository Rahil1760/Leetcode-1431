/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0;
  let j =0;
  while (i <= nums.length-1){
    if(nums[i] == 0){
        i++;
    }
    else{
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j++


    }
  }
  return nums
  }