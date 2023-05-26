import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Post, Prisma } from "@prisma/client";

@Injectable()
export class PostService {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: Post): Promise<Post> {
        return this.prisma.post.create({ data });
    }

    async findAll(): Promise<Post[]> {
        return this.prisma.post.findMany();
    }

    async findOne(id: string): Promise<Post | null> {
        return this.prisma.post.findUnique({ where: { id : id} });
    }

    async update(id: string, data: Post): Promise<Post> {
        return this.prisma.post.update({ where: { id:id }, data });
    }

    async delete(id: string): Promise<Post> {
        return this.prisma.post.delete({ where: {id:id } });
    }
}
