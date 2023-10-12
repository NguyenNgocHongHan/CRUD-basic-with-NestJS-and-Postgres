import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Publisher } from 'src/publisher/entities/publisher.entity';
import { Author } from 'src/author/entities/author.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,

    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,

    @InjectRepository(Publisher)
    private readonly publisherRepository: Repository<Publisher>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const book: Book = new Book();
    book.name = createBookDto.name;
    book.description = createBookDto.description;
    book.typeBook = createBookDto.typeBook;
    book.price = createBookDto.price;
    book.publisher = await this.publisherRepository.findOne({
      where: {
        id: createBookDto.publisherID,
      },
    });
    book.authors = [];
    for (let i = 0; i < createBookDto.authorIDs.length; i++) {
      const author = await this.authorRepository.findOne({
        where: {
          id: createBookDto.authorIDs[i],
        },
      });
      book.authors.push(author);
    }
    return await this.bookRepository.save(book);
  }

  async getAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async getById(id: number): Promise<Book | null> {
    return await this.bookRepository.findOneBy({ id });
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    const book: Book = new Book();
    book.name = updateBookDto.name;
    book.description = updateBookDto.description;
    book.typeBook = updateBookDto.typeBook;
    book.price = updateBookDto.price;
    book.publisher = await this.publisherRepository.findOne({
      where: {
        id: updateBookDto.publisherID,
      },
    });
    book.authors = [];
    for (let i = 0; i < updateBookDto.authorIDs.length; i++) {
      const author = await this.authorRepository.findOne({
        where: {
          id: updateBookDto.authorIDs[i],
        },
      });
      book.authors.push(author);
    }
    book.id = id;
    return await this.bookRepository.save(book);
  }

  async remove(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
