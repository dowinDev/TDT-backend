'use strict';

import { Accounts } from '../../persistence/entity/Accounts';
import { RegisterRequest } from '../../dto/request/RegisterRequest';

export class AccountMapper {
  static mapToAccount(registerRequest: RegisterRequest): Accounts {
    const account = new Accounts();
    account.username = registerRequest.username;

    return account;
  }

  static mapToRequest(account: Accounts): RegisterRequest {
    const registerRequest = new RegisterRequest();
    registerRequest.username = account.username;

    return registerRequest;
  }
}
