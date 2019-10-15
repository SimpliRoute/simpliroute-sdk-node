// import { UNAUTHORIZED, getStatusText } from 'http-status-codes';
import AccountRepository from '@simpliroute/core/account/repository';
import Vehicle from '@simpliroute/core/entities/vehicle';
import http, { AxiosResponse } from 'axios';


import { Urls } from '../types';

const repository: AccountRepository = {
    async getVehicles(token: string): Promise<Vehicle> {
        try {
            const response: AxiosResponse = await http({
                url: `${Urls.ApiProd}v1/accounts/me/`,
                headers: {
                    Authorization: `Token ${token}`
                }
            });

            return response;
        }
        catch (error) {
            throw error;
        }
    }
};

export default repository;

