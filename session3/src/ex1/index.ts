// Xây dựng lớp Circle gồm các thuộc tính :

// Bán kính và Màu sắc

// Các phương thức khởi tạo (constructor)

// Các phương thức getter và setter

// Phương thức chuVi() trả về chu vi của hình tròn

// Phương thức dienTich() trả về diện tích hình tròn

// Phương thức inputData() cho phép người dùng nhập vào toàn bộ thông tin của đối tượng

// Phương thức displayData() cho phép hiển thị toàn bộ thông tin các thuộc tính.

// Yêu cầu vẽ biểu đồ lớp Circle trước khi triển khai

// (Tìm hiểu về cách vẽ sơ đồ UML) - OPTIONAL



class Circle {
    private _radius: number;
    private _color: string;

    constructor(radius: number, color: string) {
        this._radius = radius;
        this._color = color;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    chuVi(): number {
        return this._radius * 2 * Math.PI;
    }

    dienTich(): number {
        return this._radius * this._radius * Math.PI;
    }

    inputData(): void {
        this._radius = Number(prompt("Nhập bán kính: "));
        this._color = String( prompt("Nhập màu sắc: "));
    }

    displayData(): void {
        console.log("Bán kính: " + this._radius);
        console.log("Màu sắc: " + this._color);
        console.log("Chu vi: " + this.chuVi());
        console.log("Diện tích: " + this.dienTich());
    }
    
}

let circle = new Circle(5, "red");
circle.displayData();
circle.inputData();
circle.displayData();
