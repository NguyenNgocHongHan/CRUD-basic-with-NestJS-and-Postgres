import { Controller, Get } from '@nestjs/common';
import { BookEntity } from './book.entity';

@Controller('books')
export class BookController {
  @Get()
  findAll(): BookEntity[] {
    const data: BookEntity[] = [
      { id: 1, name: 'han', authos: ['nca', 'xuan dieu'] },
      { id: 2, name: 'hong', authos: ['nguyen trai'] },
    ];

    return data;
  }
}
