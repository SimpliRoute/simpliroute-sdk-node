import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { User as Entity } from '@simpliroute/core/user/entity';
import { getUrl } from '../../utils';

import userInfo from './fixtures/userInfo';
import User from '..';

describe('User Test', () => {
    let mock: MockAdapter;
    const getInfoUrl = `${getUrl()}v1/accounts/me/`;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    it('Must return the expected User object when call getInfoByToken', async () => {
        mock.onGet(getInfoUrl).reply(200, userInfo);
        const userAPI = User('4412a31e624ej6ca2dbaa34396732c78d3822a1d');
        const user: Entity = await userAPI.describe();

        expect(user.account.planQuantity).toBe(10);
        expect(user.account.timezone).toBe('America/Santiago');
        expect(user.account.vehicleQuantity).toBe('6 - 10');
        expect(user.lastLogin).toEqual(new Date('2019-06-07T04:22:38.651462Z'));
    });
});
