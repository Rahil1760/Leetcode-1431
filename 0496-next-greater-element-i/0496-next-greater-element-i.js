/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack=[],map={},max=-1,element,ans=[];
    for(let i=0;i<nums2.length;i++){
        while(stack[0]!==undefined && stack[stack.length-1]<nums2[i]){
            element = stack.pop();
            map[element] = nums2[i];
        }
        stack.push(  nums2[i]);
    }
    for(let i=0;i<nums1.length;i++){
        if(map[nums1[i]]===undefined){
            ans.push(-1);
        }else{
            ans.push(map[nums1[i]]);
        }
    }
    return ans;
};