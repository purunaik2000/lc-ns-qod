/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let temp = head;
    while(temp && temp.next){
        head = head.next;
        temp = temp.next.next;
        if(head==temp) return true;
    }
    return false;
};