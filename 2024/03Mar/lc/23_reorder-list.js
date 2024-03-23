/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head, fast = head.next;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let next = slow.next;
    slow.next = null;
    slow = next;

    const stack = [];

    while(slow) {
        stack.push(slow);
        next = slow.next;
        slow.next = null;
        slow = next;
    }

    let temp = head;
    while(stack.length) {
        const node = stack.pop();
        node.next = temp.next;
        temp.next = node;
        temp = node.next;
    }
};