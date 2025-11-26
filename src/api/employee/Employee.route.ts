import { Router, Request, Response, json } from "express";
import * as handlers from './Employee.handler';
import { validateAsEmployee } from "./ZodValidator";

const employeeRouter = Router();

employeeRouter.use(json());
/*
employeeRouter.get('/', (request: Request, response: Response) => {
    response.send('Hello from Employee Router!!');
});*/

//POST 
employeeRouter.post('/', validateAsEmployee,  handlers.addEmployee);

//GET
employeeRouter.get('/', handlers.getAll);

//GET: by-id
employeeRouter.get('/:id', handlers.getById);

employeeRouter.put('/', (request: Request, response: Response) => {
    response.send('Hello from Employee Router PUT!!');
});

export default employeeRouter;