import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './author/author.module';
import { Author } from './author/entities/author.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { Book } from './book/entities/book.entity';

@Module({
  /*imports: [BookModule],
  controllers: [AppController],
  providers: [AppService],*/
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'han',
      username: 'postgres',
      entities: [Author, Book],
      database: 'postgres',
      schema: 'dbBookstore',
      logging: true,
      synchronize: true,
    }),
    BookModule,
    AuthorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
