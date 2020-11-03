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

export function ParseTreeNode<T>(nodes: (T | null)[]): TreeNode<T> | null {
    if (nodes.length > 0) {
        const head: TreeNode<T> = {
            val: nodes[0]!,
            left: null,
            right: null,
        }
        const indiceStack = [0]
        const nodeStack = [head]
        let index = indiceStack.pop()!
        let node = nodeStack.pop()
        while (node) {
            const left = index * 2 + 1
            if (left < nodes.length) {
                if (nodes[left] !== null) {
                    node.left = {
                        val: nodes[left]!,
                        left: null,
                        right: null,
                    }
                    indiceStack.push(left)
                    nodeStack.push(node.left)
                }
            }
            const right = left + 1
            if (right < nodes.length) {
                if (nodes[right] !== null) {
                    node.right = {
                        val: nodes[right]!,
                        left: null,
                        right: null,
                    }
                    indiceStack.push(right)
                    nodeStack.push(node.right)
                }
            }
            index = indiceStack.pop()!
            node = nodeStack.pop()
        }
        return head
    } else {
        return null
    }
}