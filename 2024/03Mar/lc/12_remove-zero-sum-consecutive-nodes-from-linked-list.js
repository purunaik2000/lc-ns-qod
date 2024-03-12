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
var removeZeroSumSublists = function(head) {
    const newHead = new ListNode(0, head);
    const map = new Map([[0, newHead]]);
    const temp = [0];
    let sum = 0;

    while(head) {
        sum += head.val;
        if(map.has(sum)) {
            map.get(sum).next = head.next;
            while(temp[temp.length-1] != sum) {
                const r = temp.pop();
                map.delete(r);
            }
        }else {
            map.set(sum, head);
            temp.push(sum);
        }
        head = head.next;
    }

    return newHead.next;
};