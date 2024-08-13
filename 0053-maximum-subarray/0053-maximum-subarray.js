/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curr_sum = nums[0];
    let max_sum = nums[0];
    for ( let i = 1; i< nums.length; i++ ) {
       curr_sum = Math.max( nums[i], curr_sum + nums[i] );
       max_sum = Math.max(curr_sum, max_sum)
    }
    return max_sum
};