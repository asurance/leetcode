export function CreateListNode<T>(arr: T[]): ListNode<T> | null {
    let out: ListNode<T> | null = null
    const length = arr.length
    for (let i = length - 1; i >= 0; i--) {
        const node: ListNode<T> = {
            val: arr[i],
            next: out,
        }
        out = node
    }
    return out
}

export function ParseListNode<T>(head: ListNode<T> | null): T[] {
    const set = new Set<ListNode<T>>()
    const out: T[] = []
    while (head) {
        if (set.has(head)) {
            throw new Error('Duplicate nodes')
        } else {
            set.add(head)
        }
        out.push(head.val)
        head = head.next
    }
    return out
}