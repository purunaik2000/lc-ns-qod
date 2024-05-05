/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    while(node.next != null) {
        node.val = node.next.val;
        if(node.next.next == null) break;
        node = node.next;
    }

    node.next = null;
};

// var deleteNode = function(node) {
//     node.val = node.next.val;
//     node.next = node.next.next;
// };