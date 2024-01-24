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
var pseudoPalindromicPaths  = function(root, mask=0) {
    if(!root) return 0;
    mask ^= 1<<root.val;

    if(!root.left && !root.right) {
        return (mask & (mask-1)) ? 0 : 1;
    }

    return pseudoPalindromicPaths(root.left, mask) + pseudoPalindromicPaths(root.right, mask);
};