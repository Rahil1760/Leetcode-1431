/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let n = heights.length;
    let stack = [];
    let maxArea = 0;

    for (let i = 0; i < n; i++) {
        while (stack.length && heights[stack[stack.length - 1]] >=heights[i]) {
            let height = heights[stack.pop()];
            let width = stack.length ? i - stack[stack.length - 1] - 1 : i;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    while (stack.length) {
        let height = heights[stack.pop()];
        let width = stack.length ? n - stack[stack.length - 1] - 1 : n;
        maxArea = Math.max(maxArea, height * width);
    }

    return maxArea
};