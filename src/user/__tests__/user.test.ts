import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { User as UserEntity } from '@simpliroute/core/entities';
import { API_URL } from '../../urls';

import userInfo from './fixtures/userInfo';
import user from '..';

describe('User Test', () => {
    let mock: MockAdapter;
    const getInfoUrl = `${API_URL}v1/accounts/me/`;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    it('Must return the expected User object when call getInfoByToken', async () => {
        mock.onGet(getInfoUrl).reply(200, userInfo);
        const token = '4412a31e624ej6ca2dbaa34396732c78d3822a1d';
        const response: UserEntity = await user.getInfoByToken(token);
        expect(response.lastLogin).toBe('2019-06-07T04:22:38.651462Z');
        expect(response.account.planQuantity).toBe(10);
        expect(response.account.timezone).toBe('America/Santiago');
        expect(response.account.vehicleQuantity).toBe('6 - 10');
    });

    it('Must give an error when call with an invalid token', async () => {
        mock.onGet(getInfoUrl).reply(401);

        try {
            await user.getInfoByToken('im_an_invalid_token');
        }
        catch (error) {
            expect(error.response.status).toBe(401);
        }
    });
});
