import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Comment } from '.prisma/client';
import { Prisma } from '@prisma/client';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async getAllComments(): Promise<Comment[]> {
    return this.commentService.getAllComments();
  }

  @Post()
  async createComment(@Body() data: Prisma.CommentCreateInput): Promise<Comment> {
    return this.commentService.createComment(data);
  }

  @Get(':id')
  async getCommentById(@Param('id') id: string): Promise<Comment> {
    return this.commentService.getCommentById(id);
  }

  @Put(':id')
  async updateComment(@Param('id') id: string, @Body() data: Prisma.CommentUpdateInput): Promise<Comment> {
    return this.commentService.updateComment(id, data);
  }

  @Delete(':id')
  async deleteComment(@Param('id') id: string): Promise<Comment> {
    return this.commentService.deleteComment(id);
  }
}
