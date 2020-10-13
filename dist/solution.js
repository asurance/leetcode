"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSum = void 0;
function twoSum(nums, target) {
    var map = new Map();
    var out = [-1, -1];
    nums.some(function (num, id) {
        var index = map.get(num);
        if (index === undefined) {
            map.set(target - num, id);
            return false;
        }
        else {
            out[0] = index;
            out[1] = id;
            return true;
        }
    });
    return out;
}
exports.twoSum = twoSum;
//# sourceMappingURL=solution.js.map