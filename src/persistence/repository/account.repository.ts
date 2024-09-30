'use strict';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Accounts } from '../entity/Accounts';

@Injectable()
export class AccountRepository {
  constructor(
    @InjectModel(Accounts)
    private readonly accountsModel: typeof Accounts,
  ) {}

  async add(data: Accounts): Promise<Accounts> {
    return Accounts.create(data);
  }
  //
  // async get(data) {
  //   return await Accounts.findOne(data);
  // }
  //
  // async update(data) {
  //   return await Accounts.update(data);
  // }
  //
  // async delete(data) {
  //   return await Accounts.destroy(data);
  // }
}
