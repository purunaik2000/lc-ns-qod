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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth, loc = 1) {
  if (depth == 1) return new TreeNode(val, root);

  if (depth - 1 == loc) {
    root.left = new TreeNode(val, root.left);
    root.right = new TreeNode(val, null, root.right);
  } else {
    if (root.left) addOneRow(root.left, val, depth, loc + 1);

    if (root.right) addOneRow(root.right, val, depth, loc + 1);
  }

  return root;
};
