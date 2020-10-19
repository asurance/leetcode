/* eslint-disable @typescript-eslint/no-unused-vars */
class ListNode<T = number> {
    val: T
    next: ListNode<T> | null
    constructor(val?: number, next?: ListNode | null)
}


class Node<T = number> {
    val: T
    left: Node<T> | null
    right: Node<T> | null
    next: Node<T> | null
    constructor(val?: T, left?: Node<T>, right?: Node<T>, next?: Node<T>)
}