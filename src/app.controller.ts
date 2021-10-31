import { Controller, Get, Post, Req, Request, UseGuards, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) { }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('login')
  login(@Body() body): any {
    return this.authService.login(body);
  }
}
