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
 * @return {boolean}
 */
var evaluateTree = function (root) {
    if (root.left == null) return root.val;
    const left = evaluateTree(root.left);
    const right = evaluateTree(root.right);
    return root.val == 2 ? left || right : left & right;
};
