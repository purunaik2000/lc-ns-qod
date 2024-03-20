/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    a--;
    b++;
    let temp1 = list1, temp2 = list1;

    while(a-->0) {
        temp1 = temp1.next;
    }

    while(b-->0) {
        temp2 = temp2.next;
    }

    temp1.next = list2;

    while(list2.next != null) {
        list2 = list2.next;
    }

    list2.next = temp2;

    return list1;
};