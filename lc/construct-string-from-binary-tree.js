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
 * @return {string}
 */
var tree2str = function(root) {
    let res = '';
    function preOrder(root) {
        if(!root) return;
        res += root.val;
        if(root.left) {
            res += '(';
            preOrder(root.left);
            res += ')';
        }
        if(root.right) {
            if(!root.left) res += '()';
            res += '(';
            preOrder(root.right);
            res += ')';
        }
    }
    preOrder(root);
    return res;
};