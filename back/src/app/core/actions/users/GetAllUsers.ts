import { User } from '../../model/Entities/User';
import { UserRepository } from '../../model/UserRepository';

export class GetAllUsers {

    private userRepo: UserRepository;

    constructor(userRepo: UserRepository) {
        this.userRepo = userRepo;
    }

    async run(): Promise<User[]> {
        return this.userRepo.getAll();
    }

}
