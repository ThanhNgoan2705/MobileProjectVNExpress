import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Like, Prisma } from '.prisma/client';

@Injectable()
export class LikeService {
    constructor( private readonly prismaService: PrismaService) { }
    
    async getAllLikes(): Promise<Like[]> {
        const likes = await this.prismaService.like.findMany();
        return likes;
    }

    async getLikeById(id: string): Promise<Like> {
        const like = await this.prismaService.like.findUnique({ where: { id:(id) } });
        return like;
    }

    async createLike(data: Like): Promise<Like> {
        const like = await this.prismaService.like.create({
            data,
        });
        return like;
    }
    async updateLike(id: string, data: Like): Promise<Like> {
        const like = await this.prismaService.like.update({
            where: { id:(id) },
            data,
        });
        return like;
    }

    async deleteLike(id: string): Promise<Like> {
        const like = await this.prismaService.like.delete({
            where: { id:(id) },
        });
        return like;
    }
}
