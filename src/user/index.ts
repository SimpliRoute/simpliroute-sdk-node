import User from '@simpliroute/core/entities/user';
import UserUseCase from '@simpliroute/core/user/usecase';
import repository from './http/repository';

const user: UserUseCase = {
    async getInfoByToken(token: string): Promise<User> {
        return repository.getUserAccountInfoByToken(token);
    }
}

export default user;
