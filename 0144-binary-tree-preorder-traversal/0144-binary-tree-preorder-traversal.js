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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let output = [];
    const getPreOrder = (node)=>{
        if(node == null) return;
        output.push(node.val);
        getPreOrder(node.left);
        getPreOrder(node.right)
    }
    getPreOrder(root);
    return output;

};