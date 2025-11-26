import { NextFunction, Request, Response } from "express";
import { z, ZodError } from "zod";

const employeeSchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    employedAt: z.date().optional(),
    position: z.enum(['Manager', 'HR', 'Engineer']),
    salary: z.number(),
}).strict();

type ZodEmployee = z.infer<typeof employeeSchema>;

export function validateAsEmployee(req: Request, res: Response, next: NextFunction) {
    try {
        const parseResult = employeeSchema.parse(req.body);
        next();
    } catch (error) {
        if (error instanceof ZodError){
            res.status(400);
        }
        next (error); 
    } 
}
