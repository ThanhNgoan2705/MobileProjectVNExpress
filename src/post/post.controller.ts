import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostModel } from '@prisma/client';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() postData: PostModel): Promise<PostModel> {
    return this.postService.create(postData);
  }

  @Get()
  async findAll(): Promise<PostModel[]> {
    return this.postService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostModel | null> {
    return this.postService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() postData: PostModel): Promise<PostModel> {
    return this.postService.update(id, postData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<PostModel> {
    return this.postService.delete(id);
  }
}
