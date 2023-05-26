import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto';
import { v4 } from 'uuid';
import * as crypto from 'crypto';


@Injectable()
export class AuthService {
    constructor(private readonly prismaService: PrismaService) { }

    async register(email: string, password: string) {
        const oldUser = await this.prismaService.user.findUnique({
            where: { email: email },
        });
        if (oldUser) {
            return {
                message: 'User already exists',
            };
        }
        const hashedPassword = crypto.createHash('md5').update(password).digest('hex');
        const user = await this.prismaService.user.create({
            data: { id: v4(), email: email, password: hashedPassword },
        });
        return user;
    }

    async login(loginDto: LoginDto) {
        const user = await this.prismaService.user.findUnique({
            where: { email: loginDto.email },
        });
        if (!user) {
            return {
                message: 'User not found',
            };
        }
        const hashedPassword = crypto.createHash('md5').update(loginDto.password).digest('hex');
        if (user.password !== hashedPassword) {
            return {
                message: 'Wrong password',
            };
        }
        return user;
    }
}
