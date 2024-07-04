package lc

type ListNode struct {
	Val int
	Next *ListNode
}

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func mergeNodes(head *ListNode) *ListNode {
    dummy := &ListNode{}
    cur := dummy
    head = head.Next
    sum := 0
    for head != nil {
        if head.Val == 0 {
            cur.Next = &ListNode{Val: sum}
            cur = cur.Next
            sum = 0
        }
        sum += head.Val
        head = head.Next
    }
    return dummy.Next
}