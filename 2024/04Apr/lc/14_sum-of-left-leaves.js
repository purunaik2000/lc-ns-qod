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
var sumOfLeftLeaves = function(root) {
    let sum = 0;

    dfs(root, false);

    function dfs(root, isLeft) {
        if((root.left == null) && (root.right == null)) {
            if(isLeft) sum += root.val;
            return;
        }

        if(root.left != null) dfs(root.left, true);
        if(root.right != null) dfs(root.right, false);
    }

    return sum;
};