/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [];
    let temp = head;
    while(head && head.next){
        arr.push(temp.val);
        temp=temp.next;
        head=head.next.next;
    }
    if(head) temp=temp.next;
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]!=temp.val) return false;
        temp=temp.next;
    }
    return true;
};