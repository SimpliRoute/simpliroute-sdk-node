import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { User as UserEntity } from '@simpliroute/core/entities';
import { Urls } from '../../types';

import userInfo from './fixtures/userInfo';
import User from '..';

describe('User Test', () => {
    let mock: MockAdapter;
    const getInfoUrl = `${Urls.ApiProd}v1/accounts/me/`;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    it('Must return the expected User object when call getInfoByToken', async () => {
        mock.onGet(getInfoUrl).reply(200, userInfo);
        const userAPI = User('4412a31e624ej6ca2dbaa34396732c78d3822a1d');
        const user: UserEntity = await userAPI.describe();

        expect(user.lastLogin).toBe('2019-06-07T04:22:38.651462Z');
        expect(user.account.planQuantity).toBe(10);
        expect(user.account.timezone).toBe('America/Santiago');
        expect(user.account.vehicleQuantity).toBe('6 - 10');
    });

    // it('Must give an error when call with an invalid token', async () => {
    //     mock.onGet(getInfoUrl).reply(401);
    //     try {
    //         const user = User('im_an_invalid_token');
    //         await user.getUserInfo();
    //     }
    //     catch (error) {
    //         expect(error.response.status).toBe(401);
    //     }
    // });
});
