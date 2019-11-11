import UserUseCase from '@simpliroute/core/user/usecase';

export enum Urls {
    ApiProd = 'https://api.simpliroute.com/',
    OptiProd = 'https://optimizator.simpliroute.com/',
    ApiDev = 'https://api.dev.simpliroute.com/',
    OptiDev = 'https://opti.dev.simpliroute.com/',
    ApiQA = 'https://api.qa.simpliroute.com/',
    OptiQA = 'https://opti.qa.simpliroute.com/',
}

export enum Env {
    Prod = 'production',
    Dev = 'development',
    Qa = 'quality_assurance',
    Test = 'test',
}

export interface SimpliRouteSDK {
    user: UserUseCase;
}
