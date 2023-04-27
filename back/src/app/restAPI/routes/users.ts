import express, { Request, Response, Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { CreateUserController } from '../controllers/users/CreateUserController';
import { GetAllUsersController } from '../controllers/users/GetAllUsersController';

export const usersRouter: Router = express.Router()
    .post(
        '/:id',
        expressAsyncHandler(async (req: Request, res: Response) => (
            await new CreateUserController().run(req, res)
        )),
    )
    .get(
        '/',
        expressAsyncHandler(async (req: Request, res: Response) => (
            await new GetAllUsersController().run(req, res)
        )),
    );
