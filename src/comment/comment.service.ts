import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Comment, Prisma } from '.prisma/client';

@Injectable()
export class CommentService {
    constructor(private readonly prismaService: PrismaService) { }

    async getAllComments(): Promise<Comment[]> {
        const comments = await this.prismaService.comment.findMany();
        return comments;
    }

    async createComment(data: Prisma.CommentCreateInput): Promise<Comment> {
        const comment = await this.prismaService.comment.create({
            data,
        });
        return comment;
    }

    async getCommentById(id: string): Promise<Comment> {
        const comment = await this.prismaService.comment.findUnique({ where: {   id: id,  },});
        return comment;
    }

    async updateComment(id: string, data: Prisma.CommentUpdateInput): Promise<Comment> {
        const comment = await this.prismaService.comment.update({where: { id: id, },
            data,
        });
        return comment;
    }

    async deleteComment(id: string): Promise<Comment> {
        const comment = await this.prismaService.comment.delete({
            where: {
                id: id,
            },
        });
        return comment;
    }
}

