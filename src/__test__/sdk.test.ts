import sdk from '..';
import { User } from '@simpliroute/core/user/entity';
import { config as loadEnvVars } from 'dotenv';

loadEnvVars();

describe('SDK Integration tests', () => {
    it('Get user description', async () => {
        const user: User = await sdk(process.env.TOKEN).user.describe();
        expect(user.email).toBe('gonzalo.bahamondez@simplit-solutions.com');
    });
});
