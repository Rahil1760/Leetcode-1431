/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let start = 0;
  let end = numbers.length-1;
  let sum = 0
  while(start < end){
   sum = numbers[start] + numbers[end];
   if(sum == target){
    return [start+1,end+1];
   }
   else if(sum > target){
    end--;
   }
   else{
    start++
   }
  }
};