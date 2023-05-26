import { Injectable } from "@nestjs/common";
import { Category } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) { }
  async create(data: Category): Promise<Category> {
    return this.prismaService.category.create({ data: data });
  }
  async findAll(): Promise<Category[]> {
    return this.prismaService.category.findMany();
  }

  async findOne(id: string): Promise<Category> {
    return this.prismaService.category.findUnique({ where: { id } });
  }

  async update(id: string, data: Category): Promise<Category> {
    return this.prismaService.category.update({
      where: { id: id },
      data,
    });
  }

  async remove(id: string): Promise<Category> {
    return this.prismaService.category.delete({ where: { id: id } });
  }

}
