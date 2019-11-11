import { UNAUTHORIZED, getStatusText } from 'http-status-codes';
import UserRepository from '@simpliroute/core/user/repository';
import { User, parse } from '@simpliroute/core/entities/user';
import http, { AxiosResponse } from 'axios';

import { Urls } from '../types';

const repository: UserRepository = {
    async getUserAccountInfoByToken(token: string): Promise<User> {
        try {
            const response: AxiosResponse = await http({
                url: `${Urls.ApiProd}v1/accounts/me/`,
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
