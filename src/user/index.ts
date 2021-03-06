import { User } from '@simpliroute/core/user/entity';
import UserUseCase from '@simpliroute/core/user/usecase';
import repository from './repository';

export default (token: string): UserUseCase => ({
    async describe(): Promise<User> {
        return repository.getUserAccountInfoByToken(token);
    },
});
