/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export function swapPairs(head: ListNode | null): ListNode | null {
    if (head) {
        if (head.next) {
            const next = head.next
            head.next = swapPairs(next.next)
            next.next = head
            return next
        } else {
            return head
        }
    } else {
        return null
    }
}