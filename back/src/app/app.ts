import express, { Router, Express, NextFunction, Request, Response } from 'express';
import { Server } from 'http';
import { HTTP_CODES } from './restAPI/constants/HTTP_CODES';
import { BaseException } from './core/model/Exceptions/BaseException';
import { InvalidUserId } from './core/model/Exceptions/InvalidUserId';
import { InvalidEmail } from './core/model/Exceptions/InvalidEmail';

export class App {

    private app: Express;
    private server: Server | null = null;

    constructor(routers: Router[]) {
        this.app = express();
        this.initzializeMiddlewares();
        this.app.use(routers);
        this.exceptionHandler();
    }

    start(): void {
        this.server = this.app.listen(process.env.API_PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`Example app listening at http://localhost:${process.env.API_PORT}`);
        });
    }

    stop(): void {
        this.server?.close();
    }

    private initzializeMiddlewares(): void {
        this.app.use(express.json({ limit: '50mb' }));
    }

    private exceptionHandler(): void {
        this.app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
            console.log(error);
            if (error instanceof BaseException) {
                const { message, data } = error as BaseException;
                const httpCode = mapErrors(error);

                res.status(httpCode).json({
                    error: error.constructor.name,
                    message,
                    data,
                });
            } else {
                res.status(HTTP_CODES.SERVER_ERROR).json({
                    error: 'Unknown error',
                });
            }

            next();
        });

        function mapErrors(error: BaseException): number {
            switch (error.constructor) {
                case InvalidUserId:
                case InvalidEmail:
                    return 400;
                default:
                    return 500;
            }
        }
    }

}
