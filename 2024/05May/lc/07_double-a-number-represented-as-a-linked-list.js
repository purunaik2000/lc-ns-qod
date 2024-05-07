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

var reverseList = function(head) {
    let prev = null;
    while(head){
        const next = head.next;
        head.next=prev;
        prev=head;
        head=next;
    }
    return prev;
};

var doubleIt = function(head) {
    head = reverseList(head);
    let rem = 0, sum = 0, newHead = null;
    while(head){
        sum = 2*head.val+rem;
        newHead = new ListNode(sum%10, newHead);
        rem = parseInt(sum/10);
        head = head.next;
    }
    if(rem) newHead = new ListNode(rem, newHead);
    return newHead;
};