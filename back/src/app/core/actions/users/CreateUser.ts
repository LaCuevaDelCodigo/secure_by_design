import { User } from '../../model/Entities/User';
import { UserRepository } from '../../model/UserRepository';
import { Email } from '../../model/VOs/Email';
import { Name } from '../../model/VOs/Name';
import { UserId } from '../../model/VOs/UserId';

export class CreateUser {

    private userRepo: UserRepository;

    constructor(userRepo: UserRepository) {
        this.userRepo = userRepo;
    }

    async run(id: string, email: string, name: string): Promise<void> {
        const user = new User(
            new UserId(id),
            new Email(email),
            new Name(name),
        );

        return this.userRepo.add(user);
    }

}
