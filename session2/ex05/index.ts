// Cho một mảng số nguyên nums, viết một hàm tìm và trả về tổng của mảng con (subarray) có tổng lớn nhất.

function maxSubArray(nums: number[]): number {
    let max = nums[0];
    let sum = 0;
    for (let num of nums) {
        if (sum < 0) {
            sum = 0;
        }
        sum += num;
        max = Math.max(max, sum);
    }
    return max;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6