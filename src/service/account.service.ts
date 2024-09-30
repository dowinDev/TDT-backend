import { AccountRepository } from '../persistence/repository/app.repository';
import { Injectable } from '@nestjs/common';
import { AccountMapper } from '../utils/mapper/AccountMapper';
import { RegisterRequest } from '../dto/request';
import { Accounts } from '../persistence/entity/Accounts';

@Injectable()
export class AccountService {
  private readonly accountRepository: AccountRepository;

  async registerService(req: RegisterRequest): Promise<Accounts> {
    const data = AccountMapper.mapToAccount(req);

    return this.accountRepository.add(data);
  }

  getHello() {
    return 'Hello World!';
  }
}
