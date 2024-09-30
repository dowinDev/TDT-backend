import { UserController } from './users.controller';
import { AuthenticateController } from './authenticate.controller';
import { AccountController } from './account.controller';

export const AppController = [
  UserController,
  AuthenticateController,
  AccountController,
];
