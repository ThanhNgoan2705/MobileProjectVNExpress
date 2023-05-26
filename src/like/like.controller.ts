import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { LikeService } from './like.service';
import { Like } from '.prisma/client';

@Controller('likes')
export class LikeController {
    constructor(private readonly likeService: LikeService) {}
    
    @Get()
    getAllLikes(): Promise<Like[]> {
        return this.likeService.getAllLikes();
    }

    @Get(':id')
    getLikeById(@Param('id') id: string): Promise<Like> {
        return this.likeService.getLikeById(id);
    }

    @Post()
    async createLike(@Body() data: Like): Promise<Like> {
        return this.likeService.createLike(data);
    }

    @Put(':id')
    async updateLike(@Param('id') id: string, @Body() data: Like): Promise<Like> {
        return this.likeService.updateLike(id, data);
    }

    @Delete(':id')
    async deleteLike(@Param('id') id: string): Promise<Like> {
        return this.likeService.deleteLike(id);
    }
}
