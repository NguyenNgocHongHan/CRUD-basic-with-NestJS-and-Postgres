import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';
import { async } from 'rxjs';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author: Author = new Author();
    author.name = createAuthorDto.name;
    author.birthday = createAuthorDto.birthday;
    author.nationality = createAuthorDto.nationality;
    author.gender = createAuthorDto.gender;
    return await this.authorRepository.save(author);
  }

  async getAll(): Promise<Author[]> {
    return await this.authorRepository.find();
  }

  async getById(id: number): Promise<Author | null> {
    return await this.authorRepository.findOneBy({ id });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    const author: Author = new Author();
    author.name = updateAuthorDto.name;
    author.birthday = updateAuthorDto.birthday;
    author.nationality = updateAuthorDto.nationality;
    author.gender = updateAuthorDto.gender;
    author.id = id;
    return await this.authorRepository.save(author);
  }

  async remove(id: number): Promise<void> {
    await this.authorRepository.delete(id);
  }
}
