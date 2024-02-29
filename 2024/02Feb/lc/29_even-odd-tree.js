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
var isEvenOddTree = function(root) {
    let level = true;

    const q = [root];

    while(q.length) {
        let size = q.length;
        let last = level ? -Infinity : Infinity;
        while(size--) {
            let node = q.shift();
            let isEven = node.val%2 == 0;
            if(isEven == level) return false;
            if((level) && (last >= node.val)) return false;
            if((!level) && (last <= node.val)) return false;
            last = node.val;
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }

        level = !level;
    }

    return true;
};