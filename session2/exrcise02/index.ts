// Cho một chuỗi s chỉ chứa các ký tự '(', ')', '{', '}', '[', ']', viết một hàm xác định xem chuỗi đầu vào s có hợp lệ hay không.

// Một chuỗi đầu vào s được coi là hợp lệ nếu:

// Dấu mở ngoặc phải được đóng phải cùng một loại ngoặc.

// Dấu mở ngoặc phải được đóng theo thứ tự chính xác.

function isValid(s: string): boolean {
    let stack: string[] = [];
    let onj: {[key: string]: string} = {
        '(': ')', // tạo một object với key là dấu mở ngoặc và value là dấu đóng ngoặc
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < s.length; i++) { // lăp qua từng phần tử của chuỗi s
        if (onj[s[i]]) {  // nếu phần tử đó là dấu mở ngoặc thì push vào stack với mục đích so sánh với dấu đóng ngoặc
            stack.push(onj[s[i]]);
        } else { // nếu phần tử đó là dấu đóng ngoặc thì so sánh với phần tử cuối cùng của stack
            if (s[i] !== stack.pop()) { // nếu không giống thì return false
                return false; 
            }
        }
     console.log(stack)   
    }
    return stack.length === 0;
}

console.log("=>>>",isValid('{()}')); // true