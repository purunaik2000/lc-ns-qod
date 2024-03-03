/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let newHead = new ListNode(0);
    newHead.next = head;

    let temp = newHead;
    while(n--) temp = temp.next;
    let temp2 = newHead;

    while(temp.next) {
        temp = temp.next;
        temp2 = temp2.next;
    }

    temp2.next = temp2.next.next;

    return newHead.next;
};