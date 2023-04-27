import { Request, Response } from 'express';
import { GetAllUsers } from '../../../core/actions/users/GetAllUsers';
import { User } from '../../../core/model/Entities/User';
import { InMemoryUserRepository } from '../../../core/infrastructure/persistence/InMemoryUserRepository';

export class GetAllUsersController {

    private getAllUsers: GetAllUsers;

    constructor() {
        const userRepository = new InMemoryUserRepository();

        this.getAllUsers = new GetAllUsers(userRepository);
    }

    public async run(req: Request, res: Response): Promise<void> {
        const users = await this.getAllUsers.run();

        const usersDTO = this.mapToResponse(users);

        res.status(200).send(usersDTO);
    }

    private mapToResponse(users: User[]): { id: string, email: string, name: string }[] {
        return users.map(user => ({
            id: user.id.value,
            email: user.email.value,
            name: user.name.value,
        }));
    }

}
