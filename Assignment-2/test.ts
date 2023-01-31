// @ts-ignore
interface basicEmployeeDetails {
    designation: string;
    salary: number;
    office_time: string;
    printEmployee?: Function;
}

class User {
    protected name: string;
    protected age: number;
    protected address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

class employee extends User implements basicEmployeeDetails {
    designation: string;
    salary: number;
    office_time: string;

    constructor(
        name: string,
        age: number,
        address: string,
        basicEmpDetails: basicEmployeeDetails
    ) {
        super(name, age, address);
        this.designation = basicEmpDetails.designation;
        this.salary = basicEmpDetails.salary;
        this.office_time = basicEmpDetails.office_time;
    }

    printEmployee = () => {
        let msg = `${this.name} employee on designation ${this.designation} with salay of ${this.salary}, age ${this.age}, address ${this.address} comes office at ${this.office_time}`
        console.log(msg);
    };
}

const emp1Details: basicEmployeeDetails = {
    designation: "SDE-1",
    salary: 18000,
    office_time: "10:00am",
};
const emp = new employee("Gireesh", 22, "sector-28", emp1Details);
emp.printEmployee();
