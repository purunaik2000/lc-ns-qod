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
var distributeCoins = function(root) {
    function dfs(root) {
        if(root == null) return 0;
        const left = dfs(root.left);
        const right = dfs(root.right);
        const total = root.val + left + right - 1;
        res += Math.abs(total);
        return total;
    }

    let res = 0;
    dfs(root);
    return res;
};