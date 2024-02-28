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
var findBottomLeftValue = function(root) {
    let res = 0;
    const q = [root];

    while(q.length) {
        let size = q.length;
        const x = q.shift();
        res = x.val;
        size--;
        if(x.left) q.push(x.left);
        if(x.right) q.push(x.right);
        while(size--) {
            const x = q.shift();
            if(x.left) q.push(x.left);
            if(x.right) q.push(x.right);
        }
    }

    return res;
};