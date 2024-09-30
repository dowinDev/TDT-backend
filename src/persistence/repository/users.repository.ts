'use strict';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from '../entity/Users';
// import { RegisterRequest } from '../dto/register.request';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(Users)
    private readonly usersModel: typeof Users,
  ) {}

  // async createUser(req : ): Promise<Users> {
  //   return this.usersModel.create();
  // }
  //
  // async getPostById(id) {
  //   return await Users.findByPk({ id });
  // }
  //
  // async getAllUsers() {
  //   return 'hello, world!';
  // }
  //
  // async updatePost(id, data) {
  //   return await Users.update(data, { where: { id } });
  // }
  //
  // async deletePost(id) {
  //   return await Users.destroy({ where: { id } });
  // }
}
