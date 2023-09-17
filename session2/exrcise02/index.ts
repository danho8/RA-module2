function isValid(s: string): boolean {
    const stack: string[] = [];
    const map: { [key: string]: string } = {
      '(': ')',
      '[': ']',
      '}': '}'
    };
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      // Nếu là một dấu mở ngoặc, thêm vào stack
      if (map[char]) {
        stack.push(char);
      } else {
        // Nếu là một dấu đóng ngoặc
        // Kiểm tra stack có phần tử không
        // và xác định xem dấu đóng ngoặc này có phù hợp với dấu mở ngoặc cuối cùng hay không
        if (stack.length === 0) {
          return false; // Không hợp lệ nếu stack trống
        }
  
        const lastOpenBracket = stack.pop();
        if (map[lastOpenBracket] !== char) {
          return false; // Không hợp lệ nếu không phù hợp
        }
      }
    }
  
    // Nếu stack còn phần tử, tức là còn dấu mở ngoặc chưa được đóng
    return stack.length === 0;
  }

    console.log(isValid('()')); // true