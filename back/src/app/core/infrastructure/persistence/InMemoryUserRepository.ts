import { User } from '../../model/Entities/User';
import { UserRepository } from '../../model/UserRepository';

export class InMemoryUserRepository implements UserRepository {

    private static data: Record<string, User> = {};

    async add(user: User): Promise<void> {
        InMemoryUserRepository.data[user.id.value] = user;
    }

    async getAll(): Promise<User[]> {
        return Object.values(InMemoryUserRepository.data);
    }

}
