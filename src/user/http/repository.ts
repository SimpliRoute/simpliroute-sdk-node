import User from '@simpliroute/core/entities/user';
import UserRepository from '@simpliroute/core/user/repository';
import http, { AxiosResponse } from 'axios';

import { API_URL } from '../../urls';
import mapper from './mapper';

const repository: UserRepository = {
    async getUserAccountInfoByToken(token: string): Promise<User> {
        const response: AxiosResponse = await http({
            url: `${API_URL}v1/accounts/me/`,
            headers: {
                Authorization: `Token ${token}`
            }
        });

        return mapper(response.data);
    }
};

export default repository;
