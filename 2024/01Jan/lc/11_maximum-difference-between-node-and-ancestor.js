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
var maxAncestorDiff = function(root) {
    let res = 0;
    function traverse(root, min, max) {
        if(!root) return;
        res = Math.max(res, Math.abs(root.val-max), Math.abs(root.val-min));
        traverse(root.left, Math.min(min, root.val), Math.max(max, root.val));
        traverse(root.right, Math.min(min, root.val), Math.max(max, root.val));
    }
    traverse(root, root.val, root.val);
    return res;
};