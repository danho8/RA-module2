// (Phương trình bậc 2) Thiết kế một lớp tên là QuadraticEquation cho một phương trình bậc hai (quadratic equation) ax2 + bx + c = 0. Lớp này gồm các thành phần:

// Trường dữ liệu a, b, và c thuộc kiểu private number đại diện cho 3 hệ số.

// Phương thức khởi tạo với 3 tham số để khởi tạo các giá trị cho a, b và c.

// Phương thức gettter và setter cho a, b và c.

// Phương thức getDiscriminant() trả về delta theo công thức delta = b2 - 4ac.

// Phương thức getRoot1() và getRoot2() trả về 2 nghiệm của phương trình

// getRoot1() và getRoot2() thật sự hữu ích khi delta >= 0. Hai phương thức này trả về 0 khi delta < 0.

// Vẽ sơ đồ UML cho lớp QuadraticEquation và cài đặt lớp.

// Viết chương trình thực thi như sau:

// Nhập vào 3 giá trị cho a, b, c và hiển thị kết quả dựa trên việc tính delta. Nếu delta >= 0, hiển thị 2 nghiệm. Nếu delta bằng 0, hiển thị một nghiệm (do 2 nghiệm bằng nhau). Còn lại hiển thị chuỗi “The equation has no roots”

let a: number = Number(prompt("Nhập a: "));
let b: number = Number(prompt("Nhập b: "));
let c: number = Number(prompt("Nhập c: "));
let delta: number = b * b - 4 * a * c;

class QuadraticEquation {
    private _a: number;
    private _b: number;
    private _c: number;

    constructor(a: number, b: number, c: number) {
        this._a = a;
        this._b = b;
        this._c = c;
    }

    get a(): number {
        return this._a;
    }

    set a(value: number) {
        this._a = value;
    }

    get b(): number {
        return this._b;
    }

    set b(value: number) {
        this._b = value;
    }

    get c(): number {
        return this._c;
    }

    set c(value: number) {
        this._c = value;
    }

    getDiscriminant(): number {
        return this._b * this._b - 4 * this._a * this._c;
    }

    getRoot1(): number {
        return (-this._b + Math.sqrt(this.getDiscriminant())) / (2 * this._a);
    }

    getRoot2(): number {
        return (-this._b - Math.sqrt(this.getDiscriminant())) / (2 * this._a);
    }
}

let quadraticEquation = new QuadraticEquation(a, b, c);

if (delta > 0) {
    alert("Nghiệm 1: " + quadraticEquation.getRoot1() + "\nNghiệm 2: " + quadraticEquation.getRoot2());
}
else if (delta == 0) {
    alert("Nghiệm kép: " + quadraticEquation.getRoot1());
}
else {
    alert("Phương trình vô nghiệm");
}

// (StopWatch) Thiết kế một lớp tên là StopWatch. Lớp này bao gồm:

// Trường startTime và endTime là private với phương thức getter để trả về giá trị của startTime và endTime.


// Phương thức khởi tạo không có đối số khởi tạo startTime với thời gian hiện tại của hệ thống.

// Phương thức start() để reset startTime về thời gian hiện tại của hệ thống.