import express,  { NextFunction, Request, Response } from 'express';
import employeeRouter from './api/employee/Employee.route';
import reporterRuoter from './api/reports/Report.route';

const port = 3000;

export class Server {
    private app = express();
    startServer(){
        this.app.use('/employees', employeeRouter);
        this.app.use('/reports', reporterRuoter);
        this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            console.error(err.stack)
            res.send(err.message)
            next();
        });
        this.app.listen(port, () => {
            console.log('Listening on port ' + port);
        });
    };
}

new Server().startServer();