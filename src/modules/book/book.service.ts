import { BookEntity } from './book.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  private readonly books: BookEntity[] = [];

  create(cat: BookEntity) {
    this.books.push(cat);
  }

  findAll(): BookEntity[] {
    return this.books;
  }
}
