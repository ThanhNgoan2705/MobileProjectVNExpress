import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() body: { email: string; password: string }) {
    const result = await this.authService.register(body.email, body.password);
    if ('message' in result) {
      return { error: result.message };
    }
    return { user: result };
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    const result = await this.authService.login(loginDto);
    if ('message' in result) {
      return { error: result.message };
    }
    return { user: result };
  }
}
