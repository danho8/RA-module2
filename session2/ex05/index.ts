// Cho một mảng số nguyên nums, viết một hàm tìm và trả về tổng của mảng con (subarray) có tổng lớn nhất.

function maxSubArray(nums: number[]): number {
    let max = nums[0]; // giả sử phần tử đầu tiên là max 
    let sum = 0;
    for (let num of nums) {
        if (sum < 0) {
            sum = 0;
        }
        sum += num;
        max = Math.max(max, sum); // so sánh max với sum và lấy giá trị lớn hơn gán cho max
    }
    return max; // trả về max
}

console.log(maxSubArray([-2, 10, -3, 4, -1, 2, 1, -5, 4])); // 6