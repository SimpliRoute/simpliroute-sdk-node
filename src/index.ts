import { SimpliRouteSDK } from './types';
import User from './user';

export default (token: string): SimpliRouteSDK => ({
    user: User(token)
});