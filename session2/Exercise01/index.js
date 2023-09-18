"use strict";
// Cho một mảng số nguyên nums và một số nguyên target,
//  viết một hàm trả về kết quả là một mảng chỉ số của hai số trong mảng nums sao cho tổng của chúng bằng target.
function sumSameTarget(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (num + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
console.log(sumSameTarget([2, 7, 11, 15], 9)); // [0, 1]
