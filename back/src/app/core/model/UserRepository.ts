import { User } from './Entities/User';

export interface UserRepository {
    add: (user: User) => Promise<void>;
    getAll: () => Promise<User[]>;
}
