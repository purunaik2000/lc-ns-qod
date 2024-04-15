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
var sumNumbers = function(root) {
    let sum = 0;

    function dfs(root, cur) {
        cur += root.val;

        if((root.left == null) && (root.right == null)) {
            sum += Number(cur);
            return;
        }

        if(root.left) dfs(root.left, cur);
        if(root.right) dfs(root.right, cur);
    }

    dfs(root, "");

    return sum;
};