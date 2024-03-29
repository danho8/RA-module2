// Exercise 04

// Cho hai chuỗi s và t, viết một hàm kiểm tra trả về true nếu t là một từ hoán vị của s và false trong trường hợp ngược lại.

// Một từ hoán vị là một từ hoặc cụm từ được tạo thành bằng cách sắp xếp lại các chữ cái của một từ hoặc cụm từ khác, thường là sử dụng tất cả các chữ cái gốc một lần duy nhất.


function isAnagram(s: string, t: string): boolean {
    let s1 = s.split('').sort().join('');
    let t1 = t.split('').sort().join('');
    return s1 === t1;
}

console.log(isAnagram('anagram', 'nagaram')); // true


// nhập vào một chuỗi và đếm số lần xuất hiện của các phần tử trong chuỗi đó

function countString(s: string): any {

    let arr = s.split('');
    let result: any = {};
    for (let i = 0; i < arr.length; i++) {
        if (result[arr[i]]) {
            result[arr[i]]++;
        } else {
            result[arr[i]] = 1;
        }
    }
    return result;
}

console.log(countString('abca')); // {a: 2, b: 1, c: 1}