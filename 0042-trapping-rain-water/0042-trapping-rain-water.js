/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length === 0) return 0; 

    let left = 0;
    let right = height.length - 1;
    let leftHighest = height[left];
    let rightHighest = height[right];
    let sum = 0;

    while (left < right) {
        if (leftHighest < rightHighest) {
            left++;
            leftHighest = Math.max(leftHighest, height[left]);
            sum += leftHighest - height[left];
        } else {
            right--;
            rightHighest = Math.max(rightHighest, height[right]);
            sum += rightHighest - height[right];
        }
    }
    return sum;
};