import { findMinArrowShots } from './solution'

test('solution', () => {
    expect(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]])).toBe(2)
    expect(findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]])).toBe(4)
    expect(findMinArrowShots([[1, 2], [2, 3], [3, 4], [4, 5]])).toBe(2)
    expect(findMinArrowShots([[1, 2]])).toBe(1)
    expect(findMinArrowShots([[2, 3], [2, 3]])).toBe(1)
    expect(findMinArrowShots([[3, 9], [7, 12], [3, 8], [6, 8], [9, 10], [2, 9], [0, 9], [3, 9], [0, 6], [2, 8]])).toBe(2)
})