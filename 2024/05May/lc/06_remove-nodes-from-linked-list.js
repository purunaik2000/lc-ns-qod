/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function(head) {
    head = reverse(head);
    let max = head.val;
    let prev = null;
    while(head) {
        let next = head.next;
        if(head.val >= max) {
            max = head.val;
            head.next = prev;
            prev = head;
        }
        head = next;
    }

    return prev;
};

function reverse (head) {
    let prev = null;
    while(head) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}