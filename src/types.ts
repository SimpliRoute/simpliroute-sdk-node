import UserUseCase from '@simpliroute/core/user/usecase';

export enum Urls {
    ApiProd = 'https://api.simpliroute.com/',
    OptiProd = 'https://optimizator.simpliroute.com/',
    ApiDev = 'https://api.dev.simpliroute.com/',
    OptiDev = 'https://opti.dev.simpliroute.com/'
}

export interface SimpliRouteSDK {
    user: UserUseCase;
}