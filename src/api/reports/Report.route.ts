import { Router, Request, Response, json } from "express";
import { resolvedInjected } from "../../shared/Container";
import { EmployeeDataAccess } from "../employee/EmployeeDataAccess";

const reporterRuoter = Router();
const employeeDataAccess = resolvedInjected<EmployeeDataAccess>('EmployeeDataAccess');
reporterRuoter.use(json());

//GET
reporterRuoter.get('/salaries', async (req: Request, resp: Response) => {
    const allEmployees = await employeeDataAccess.getAllEmployees();
    resp.json( allEmployees.map((empl) => ({
        [empl.name]: empl.salary,
    })));
});

export default reporterRuoter;