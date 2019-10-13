## simpliroute-sdk

[SimpliRoute](http://simpliroute.com) API SDK for **NodeJS - JavaScript - TypeScript**, aiming to simplify the integration of your application with SimpliRoute.


### Installation
```bash
$ npm install @simpliroute/sdk
```

#### Usage
```js
import SimpliRouteSDK from '@simpliroute/sdk';

const simpliSDK = SimpliRouteSDK('yourauthenticationtoken');

(async () => {
    const user = await simpliSDK.user.describe();
    console.log(user);
})();

```

### NPM Scripts included

- ### Jest test

```bash
# run tests with coverage
$ npm test

# run test in Jest watch mode (no coverage)
$ npm run test:watch
```

- ### Build TS Code

```bash
# Build Typescript to javascript at dist folder (check tsconfig.json)
$ npm run build

# build and keep waiting for changes to rebuild
$ npm run build:watch
```

- ### Run code with ts-node

```bash
$ npm start
```
