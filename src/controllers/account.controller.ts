'use strict';

import { Controller, Get } from '@nestjs/common';
import { AccountService } from '../service/account.service';
import { RegisterRequest } from '../dto/request';

@Controller('/account')
export class AccountController {
  private accountService = new AccountService();
  private readonly registerRequest: RegisterRequest;

  @Get('/hello')
  getHello(): string {
    return this.accountService.getHello();
  }

  // @Post()
  // register(@Body() req: registerRequest) {
  //   try {
  //     let accountRegister = registerRequest.validate(req);
  //
  //     const user = await accountService.registerService(accountRegister);
  //     res.json(user);
  //   } catch (error) {
  //     return res.status(500).json({
  //       status: 500,
  //       error: error.message,
  //     });
  //   }
  // }
  //
  // @Post()
  // login(req, res) {
  //   try {
  //     const user = await accountService.login(req.body);
  //     res.json(user);
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // }
  //
  // @Post()
  // logout(req, res) {
  //   try {
  //     const user = await accountService.logout(req.body);
  //     res.json(user);
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // }
}
