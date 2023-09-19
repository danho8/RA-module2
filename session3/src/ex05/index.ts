// Xây dựng lớp Employee gồm các thuộc tính như: mã nhân viên(employeeId), tên nhân viên (employeeName) , tuổi (age), giới tính (gen), hệ số lương(rate) và lương(salary). các phương thức khởi tạo (constructor) 0 tham số và có tham số, phương thức inputData() cho phép người dùng nhập vào toàn bộ thông tin của đối tượng trừ lương, phương thức displayData() cho phép hiển thị toàn bộ thông tin nhân viên, phương thức calSalary() cho phép tính lương nhân viên theo công thức salary = rate * 1.300.000 .

// Yêu cầu vẽ biểu đồ lớp UML Student trước khi triển khai.

// Bước 1: Tạo lớp Employee, khai báo các thuộc tính (properties), định nghĩa các phương thức khởi tạo (constructors).

// Bước 2: Tạo lớp Main chưa phương thức main() để chạy chương trình.

// Bước 3: Trong phương thức main() , khởi tạo 5 đối tượng nhân viên từ lớp Employee, tính lương và hiển thị toàn bộ thông tin các nhân viên ra màn hình.

// Bước 4: Chạy chương trình và quan sát kết quả.


class Employee {
    private _employeeId: number;
    private _employeeName: string;
    private _age: number;
    private _gen: string;
    private _rate: number;
    private _salary: number;

    constructor(employeeId: number, employeeName: string, age: number, gen: string, rate: number) {
        this._employeeId = employeeId;
        this._employeeName = employeeName;
        this._age = age;
        this._gen = gen;
        this._rate = rate;
        this._salary = this.calSalary();
    }

    get employeeId(): number {
        return this._employeeId;
    }

    set employeeId(value: number) {

        this._employeeId = value;
    }

    get employeeName(): string {    
        return this._employeeName;
    }

    set employeeName(value: string) {

        this._employeeName = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {

        this._age = value;
    }

    get gen(): string {

        return this._gen;
    }

    set gen(value: string) {

        this._gen = value;
    }

    get rate(): number {
            
            return this._rate;
        }

    set rate(value: number) {

        this._rate = value;
    }

    get salary(): number {

        return this._salary;
    }

    set salary(value: number) {

        this._salary = value;
    }

    inputData(): void {
        this._employeeId = Number(prompt("Nhập mã nhân viên: "));
        this._employeeName = String(prompt("Nhập tên nhân viên: "));
        this._age = Number(prompt("Nhập tuổi: "));
        this._gen = String(prompt("Nhập giới tính: "));
        this._rate = Number(prompt("Nhập hệ số lương: "));
    }

    displayData(): void {

        console.log(`Mã nhân viên: ${this._employeeId} - Tên nhân viên: ${this._employeeName} - Tuổi: ${this._age} - Giới tính: ${this._gen} - Hệ số lương: ${this._rate} - Lương: ${this.calSalary()}`);
    }

    calSalary(): number {

        return this._rate * 1300000;
    }

}

class EmployeeManagement {

    private _employees: Employee[] = [];

    constructor() {
        this._employees = [];
    }

    get employees(): Employee[] {
        return this._employees;
    }

    addEmployee(employee: Employee): void {
        this._employees.push(employee);
    }

    displayEmployees(): void {
        for (let employee of this._employees) {
            employee.displayData();
        }
    }

}

let employeeManagement = new EmployeeManagement();

let employee1 = new Employee(1, "Nguyễn Văn A", 20, "Nam", 1.5);
let employee2 = new Employee(2, "Nguyễn Văn B", 21, "Nam", 1.7);
let employee3 = new Employee(3, "Nguyễn Văn C", 22, "Nam", 1.9);
let employee4 = new Employee(4, "Nguyễn Văn D", 23, "Nam", 2.1);
let employee5 = new Employee(5, "Nguyễn Văn E", 24, "Nam", 2.3);

employeeManagement.addEmployee(employee1);
employeeManagement.addEmployee(employee2);
employeeManagement.addEmployee(employee3);

employeeManagement.displayEmployees();



