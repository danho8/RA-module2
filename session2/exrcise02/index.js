"use strict";
// Cho một chuỗi s chỉ chứa các ký tự '(', ')', '{', '}', '[', ']', viết một hàm xác định xem chuỗi đầu vào s có hợp lệ hay không.
// Một chuỗi đầu vào s được coi là hợp lệ nếu:
// Dấu mở ngoặc phải được đóng phải cùng một loại ngoặc.
// Dấu mở ngoặc phải được đóng theo thứ tự chính xác.
// Mỗi dấu đóng ngoặc phải có một dấu mở ngoặc tương ứng cùng loại.
function isValid(s) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(map[s[i]]);
        }
        else {
            if (s[i] !== stack.pop()) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log("=>>>", isValid('{()}')); // true
