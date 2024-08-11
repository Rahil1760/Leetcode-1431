/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
        let result = [0,0]
const linearSearch = (nums,k)=>{
    for(let i = 0;i<nums.length;i++){
        if(nums[i] == k){
            return true;
        }
        
        
    }
    return false;
}
    for(let i = 0;i <nums1.length; i++){
        if(linearSearch(nums2,nums1[i])){
            result[0] += 1;
        }
    }

    
    for(let i =0; i< nums2.length; i++){
        if(linearSearch(nums1,nums2[i])){
            result[1] += 1;
        }
    }
    return(result)
};