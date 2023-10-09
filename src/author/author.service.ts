import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
  /*create(createAuthorDto: CreateAuthorDto) {
    return 'This action adds a new author';
  }

  findAll() {
    return `This action returns all author`;
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }*/
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  createAuthor(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author: Author = new Author();
    author.name = createAuthorDto.name;
    author.birthday = createAuthorDto.birthday;
    author.nationality = createAuthorDto.nationality;
    author.gender = createAuthorDto.gender;
    return this.authorRepository.save(author);
  }

  getAllAuthor(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  getAuthorById(id: number): Promise<Author> {
    return this.authorRepository.findOneBy({ id });
  }

  updateAuthor(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    const author: Author = new Author();
    author.name = updateAuthorDto.name;
    author.birthday = updateAuthorDto.birthday;
    author.nationality = updateAuthorDto.nationality;
    author.gender = updateAuthorDto.gender;
    author.id = id;
    return this.authorRepository.save(author);
  }

  removeAuthor(id: number): Promise<{ affected?: number }> {
    return this.authorRepository.delete(id);
  }
}
