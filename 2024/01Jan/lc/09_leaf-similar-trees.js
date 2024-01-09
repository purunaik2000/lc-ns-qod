/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

function findLeafs(root, arr){
    if(!root.left && !root.right) arr.push(root.val);
    if(root.left) findLeafs(root.left, arr);
    if(root.right) findLeafs(root.right, arr);
}

var leafSimilar = function(root1, root2) {
    let arr1 = [], arr2 = [];
    findLeafs(root1, arr1);
    findLeafs(root2, arr2);
    if(arr1.length!=arr2.length) return false;
    for(let i=0;i<arr1.length;i++){
        if(arr1[i] != arr2[i]) return false;
    }
    return true;
};