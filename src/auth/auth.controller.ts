import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AppController {
  // AuthService được inject vào AuthController
  // AuthService tự động được tạo ra khi khởi tạo controller
  constructor(private authService: AuthService) {}
  @Post('/register')
  register() {
    return {
      message: 'register success',
    };
  }
  @Post('/login')
  login() {
    return 'login success';
  }
}
