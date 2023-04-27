import { Request, Response } from 'express';
import { CreateUser } from '../../../core/actions/users/CreateUser';
import { InMemoryUserRepository } from '../../../core/infrastructure/persistence/InMemoryUserRepository';

export class CreateUserController {

    private createUser: CreateUser;

    constructor() {
        const userRepository = new InMemoryUserRepository();

        this.createUser = new CreateUser(userRepository);
    }

    public async run(req: Request, res: Response): Promise<void> {
        const { id, email, name } = this.getParams(req);

        await this.createUser.run(id, email, name);

        res.status(200).send();
    }

    private getParams(req: Request): { id: string, email: string, name: string } {
        return {
            id: req.params.id,
            email: req.body.email,
            name: req.body.name,
        };
    }

}
