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
var inorderTraversal = function(root) {
    let ans = [];
    if(!root) return ans;
    ans.push(...inorderTraversal(root.left));
    ans.push(root.val);
    ans.push(...inorderTraversal(root.right));
    return ans;
};