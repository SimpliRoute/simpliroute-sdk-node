import { Env, Urls } from './types';

export const getUrl = (): string => {
    const env: Env = (process.env.NODE_ENV as Env) || Env.Prod;

    switch (env) {
        case Env.Dev:
            return Urls.ApiDev;
        case Env.Test:
            return Urls.ApiDev;
        case Env.Prod:
            return Urls.ApiProd;
        case Env.Qa:
            return Urls.ApiQA;
        default:
            throw new Error(`Environment ${env} not handled`);
    }
};
