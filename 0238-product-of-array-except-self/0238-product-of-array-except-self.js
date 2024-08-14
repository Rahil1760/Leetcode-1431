/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
       let lp = [];
lp[0] = 1;
let rp = [];
rp[nums.length-1] =1;;
ans = []

for(let i = 1;i<nums.length;i++){
    lp[i] = (nums[i-1]) * (lp[i-1])
    }
for(let i = nums.length-2; i >=0;i--){
    rp[i] = (nums[i+1]) * (rp[i+1])  
}
for(let i = 0;i< nums.length;i++){
    ans[i] = (lp[i]) * (rp[i]);
}

return ans;
    
};