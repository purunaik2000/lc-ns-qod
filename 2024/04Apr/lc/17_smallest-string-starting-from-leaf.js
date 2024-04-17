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
var smallestFromLeaf = function(root) {
    let res = "z".repeat(26);

    function dfs(root, cur) {
        const word = String.fromCharCode(root.val+'a'.charCodeAt(0))+cur;
        if((root.left == null) && (root.right == null)) {
            res = res.localeCompare(word) < 0 ? res : word;
            return;
        }

        if(root.left) dfs(root.left, word);
        if(root.right) dfs(root.right, word);
    }

    dfs(root, "");

    return res;
};