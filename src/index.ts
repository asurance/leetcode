import { findMinArrowShots } from './solution'
import { CreateListNode, ParseListNode } from './util'
const input = [[[1, 2]]] as [number[][]]
// const input = CreateListNode([2, 1, 3, 5, 6, 4, 7])
const output = findMinArrowShots(...input)
// const output = allCellsDistOrder(10, 1, 0, 0)
console.log(input)
console.log(JSON.stringify(input))
console.log(output)
console.log(JSON.stringify(output))
// console.log(JSON.stringify(ParseListNode(output)))