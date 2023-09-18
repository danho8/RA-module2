// Cho một mảng số nguyên nums và một số nguyên target,
//  viết một hàm trả về kết quả là một object là giá tri của hai số trong mảng nums sao cho tổng của chúng bằng target.
// ví dụ : [2,7,3,6,12] target = 9 =>[{index_1:2,index_2:7},{index_:3,index_:6}]
function sumArray(nums: number[], target: number): object[] {
  let result: object[] = [];

  for (let i = 0; i < nums.length; i++) {
    // let temp = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i]===target) {
        result.push({ index_1: nums[i], index_2: nums[j] });
      }
    }
  }

  return result;
}

console.log(sumArray([2, 7, 3, 1, 12], 9));
