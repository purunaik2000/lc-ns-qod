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
 * @param {TreeNode[]} nodes
 */
var inorder = function (root, nodes) {
    if (root === null) return;
    inorder(root.left, nodes);
    nodes.push(root);
    inorder(root.right, nodes);
}

/**
 * @param {TreeNode[]} nodes
 * @param {number} start
 * @param {number} end
 * @returns {TreeNode|null}
 */
var solve = function (nodes, start, end) {
    if (end < start) return null;
    const mid = Math.floor((end - start) / 2) + start;
    const root = nodes[mid];
    root.left = solve(nodes, start, mid - 1);
    root.right = solve(nodes, mid + 1, end);
    return root;
}

/**
 * @param {TreeNode} root
 * @returns {TreeNode|null}
 */
var balanceBST = function (root) {
    if (root === null) return null;
    const inorderTraversal = [];
    inorder(root, inorderTraversal);
    return solve(inorderTraversal, 0, inorderTraversal.length - 1);
}