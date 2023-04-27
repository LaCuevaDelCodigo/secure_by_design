import dotenv from 'dotenv';
import { App } from './app';
import { usersRouter } from './restAPI/routes/users';

dotenv.config({ path: __dirname + '/../../.env' });

const restApi = new App([
    usersRouter,
]);
restApi.start();
