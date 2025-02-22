// Task1- Creating an Employee CLass
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }; // Creating a class with proprties including strings and numbers. 
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
        } // Adding a method that returns a formatted string of employee details. 
    calculateAnnualSalary() {
        return this.salary * 12
    }; //  Adding a method that returns the employee's annual salary. 
};
// Test Cases
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); 
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary()); 
// Expected output: 60000

// Task2- Creating a Manager Class (Inheriting & Mehtod Overriding)
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    } // Adding new property, teamsize. 
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`
    } // Overriding to include the teamsize.
    calculateBonus() {
        return this.salary * 0.10 * 12
    } // Calculating 10% bonus. 
    calculateAnnualSalary() {
        return this.salary * 12 + this.calculateBonus();
    } // Calcualting bonus based on manager's annual slaary. 
};
// Test Cases
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()); 
// Expected output: 9600

// Task3- Creating a Company Class
class Company {
    constructor(name) {
        this.name = name;
        this.employee = [];
    } // Creating a class with a proeprt for the company's name, and an array to store employee objects.
    addEmployee(employee) {
        this.employee.push(employee);
    } // Adding an employee to the array.
    listEmployees() {
        this.employee.forEach(employee => console.log(employee.getDetails()));
    } // Logging all employees' details. 

    // Task4- Implementing a Payroll System
    calculateTotalPayroll() {
        return this.employee.reduce((total, employee) => {
            return total + employee.calculateAnnualSalary();
        }, 0);
    } // Using reduce method to the class that returns the sum of all employee salaries. 

    // Task5- Implementing Promotions
    promoteToManager ( employee, teamSize) {
        const index = this.employee.indexOf(employee);
        this.employee[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
    } // Adding a method in the class to convert an employee into Manager while retianing their original details. 
};
// Test Cases
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
console.log(company.calculateTotalPayroll()); 
// Expected output: 165600 (assuming emp1 and mgr1 salaries)
company.promoteToManager(emp1, 3);
company.listEmployees();
// Expected output: "Manager: Alice Johnson, ID: 101, Department: Sales, Salary: $5000, Team Size: 3"