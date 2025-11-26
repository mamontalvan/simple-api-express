import { AwesomeDb } from "../../data/AwesomeDb";
import { Employee } from "./Employee.model";

export class EmployeeDataAccess {
    private employeesDataBase = new AwesomeDb<Employee>;

    public async addEmployee(emp: Employee) {
        emp.employedAt = new Date();
        return await this.employeesDataBase.insert(emp);
    }

    public async getEmployeeById(id: string){
        const employee = await this.employeesDataBase.getBy('id', id);
        return employee;
    }

    public async getAllEmployees(){
        return this.employeesDataBase.getAllElements();
    }
}