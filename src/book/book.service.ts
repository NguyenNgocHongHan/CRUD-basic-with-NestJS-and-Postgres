import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  createBook(createBookDto: CreateBookDto): Promise<Book> {
    const book: Book = new Book();
    book.name = createBookDto.name;
    book.typeBook = createBookDto.typeBook;
    book.price = createBookDto.price;
    return this.bookRepository.save(book);
  }

  getAllBook(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  getBookById(id: number): Promise<Book> {
    return this.bookRepository.findOneBy({ id });
  }

  updateBook(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    const book: Book = new Book();
    book.name = updateBookDto.name;
    book.typeBook = updateBookDto.typeBook;
    book.price = updateBookDto.price;
    book.id = id;
    return this.bookRepository.save(book);
  }

  removeBook(id: number): Promise<{ affected?: number }> {
    return this.bookRepository.delete(id);
  }
}
