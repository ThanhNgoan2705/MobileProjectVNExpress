import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { PostModule } from './post/post.module';
import { LikeModule } from './like/like.module';
import { CommentModule } from './comment/comment.module';
@Module({
  imports: [AuthModule,
    PrismaModule,
    PostModule,
    CategoryModule,
    LikeModule,
    CommentModule,],
})
export class AppModule { }
