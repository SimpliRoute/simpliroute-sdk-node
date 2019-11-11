import { UNAUTHORIZED, getStatusText } from 'http-status-codes';

import UserRepository from '@simpliroute/core/user/repository';
import { User, parse } from '@simpliroute/core/user/entity';
import { getUrl } from '../utils';

import http, { AxiosResponse } from 'axios';

const repository: UserRepository = {
    async getUserAccountInfoByToken(token: string): Promise<User> {
        try {
            const response: AxiosResponse = await http({
                url: `${getUrl()}v1/accounts/me/`,
                headers: {
                    Authorization: `Token ${token}`,
                },
            });

            return parse(response.data);
        } catch (error) {
            console.log(error);
            if (error.response.status === UNAUTHORIZED) {
                throw new Error(getStatusText(UNAUTHORIZED));
            }
            throw error;
        }
    },
};

export default repository;
