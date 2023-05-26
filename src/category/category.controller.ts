import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from '.prisma/client';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() categoryData: Category): Promise<Category> {
    return await this.categoryService.create(categoryData);
  }

  @Get()
  async findAll(): Promise<Category[]> {
    return await this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Category> {
    return await this.categoryService.findOne((id));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() categoryData: Category,
  ): Promise<Category> {
    return await this.categoryService.update(id, categoryData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Category> {
    return await this.categoryService.remove((id));
  }
}
