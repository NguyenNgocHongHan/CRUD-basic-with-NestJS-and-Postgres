import { Module } from '@nestjs/common';
import { BookController } from './book.controller';

@Module({
  imports: [],
  controllers: [BookController],
})
export class BookModule {}
