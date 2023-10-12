import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { Book } from './entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from 'src/author/entities/author.entity';
import { Publisher } from 'src/publisher/entities/publisher.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Book]),
    TypeOrmModule.forFeature([Author]),
    TypeOrmModule.forFeature([Publisher]),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
