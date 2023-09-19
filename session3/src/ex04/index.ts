// Xây dựng lớp Student gồm các thuộc tính như: mã HS, tên HS, tuổi, giới tính, địa chỉ và số điện thoại. các phương thức khởi tạo (constructor), phương thức inputData() cho phép người dùng nhập vào toàn bộ thông tin của đối tượng, phương thức displayData() cho phép hiển thị toàn bộ thông tin học sinh.

// Xây dựng chương trình với chức năng bao gồm :

// Hiển thị danh sách tất cả học sinh

// Thêm mới học sinh

// Sửa thông tin học sinh dựa vào mã học sinh

// Xóa học sinh

// Thoát

// Yêu cầu vẽ biểu đồ lớp UML Student trước khi triển khai.

// Bước 1: Tạo lớp Student , khai báo các thuộc tính (properties), định nghĩa các phương thức khởi tạo (constructors).

// Bước 2: Tạo lớp Main chứa phương thức main() để chạy chương trình.

// Bước 3: Trong phương thức main() khởi tạo danh sách Student có độ rộng 100 phần tử. Tạo menu chức năng như yêu cầu. Sử dụng cấu trúc lặp while và cấu trúc điều kiện switch case để điều hướng chức năng theo lựa chọn của người dùng (C/R/U/D) sử dụng prompt.

// Bước 4: Chạy chương trình và quan sát kết quả.


class Student {
    private _id: number;
    private _name: string;
    private _age: number;

    constructor(id: number, name: string, age: number) {
        this._id = id;
        this._name = name;
        this._age = age;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = String(value);
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = Number(value);
    }

    inputData(): void {
        this._id = Number(prompt("Nhập id: "));
        this._name = String(prompt("Nhập tên: "));
        this._age = Number(prompt("Nhập tuổi: "));
    }

    displayData(): void {
        console.log(`Id: ${this._id} - Tên: ${this._name} - Tuổi: ${this._age}`);
    }

}

class StudentManagement {

    private _students: Student[] = [];

    constructor() {
        this._students = [];
    }

    get students(): Student[] {
        return this._students;
    }

    set students(value: Student[]) {
        this._students = value;
    }

    addStudent(student: Student): void {
        this._students.push(student);
    }

    displayAll(): void {
        for (let i = 0; i < this._students.length; i++) {
            this._students[i].displayData();
        }
    }

    updateStudent(id: number): void {
        for (let i = 0; i < this._students.length; i++) {
            if (this._students[i].id === id) {
                this._students[i].inputData();
                break;
            }
        }
    }

    deleteStudent(id: number): void {
        for (let i = 0; i < this._students.length; i++) {
            if (this._students[i].id === id) {
                this._students.splice(i, 1);
                break;
            }
        }
    }

    findStudent(id: number): void {
        for (let i = 0; i < this._students.length; i++) {
            if (this._students[i].id === id) {
                this._students[i].displayData();
                break;
            }
        }
    }

}

let studentManagement = new StudentManagement();

let student1 = new Student(1, "Nguyen Van A", 20);
let student2 = new Student(2, "Nguyen Van B", 21);
let student3 = new Student(3, "Nguyen Van C", 22);
