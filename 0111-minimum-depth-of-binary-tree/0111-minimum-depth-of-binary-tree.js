/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
   if (root === null) {
        return 0;
    }

    const leftCount = minDepth(root.left);
    const rightCount = minDepth(root.right);

    if (root.left === null) {
        return 1 + rightCount;
    }

    if (root.right === null) {
        return 1 + leftCount;
    }

    if(leftCount < rightCount ){
        return leftCount + 1 ;
    }
    else{
        return rightCount + 1;
    }
};