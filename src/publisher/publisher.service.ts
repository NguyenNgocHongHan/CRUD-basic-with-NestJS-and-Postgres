import { Injectable } from '@nestjs/common';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Publisher } from './entities/publisher.entity';
import { Repository } from 'typeorm';
import { Book } from 'src/book/entities/book.entity';

@Injectable()
export class PublisherService {
  constructor(
    @InjectRepository(Publisher)
    private readonly publisherRepository: Repository<Publisher>,
  ) {}

  async create(createPublisherDto: CreatePublisherDto): Promise<Publisher> {
    const publisher: Publisher = new Publisher();
    publisher.name = createPublisherDto.name;
    return await this.publisherRepository.save(publisher);
  }

  async getAll(): Promise<Publisher[]> {
    return await this.publisherRepository.find();
  }

  async getById(id: number): Promise<Publisher | null> {
    return await this.publisherRepository.findOneBy({ id });
  }

  async getBooksOfPublisher(publisherID: number): Promise<Book[]> {
    const publisher: Publisher = await this.publisherRepository.findOne({
      where: { id: publisherID },
      relations: ['books'],
    });
    return publisher.books;
  }

  async update(
    id: number,
    updatePublisherDto: UpdatePublisherDto,
  ): Promise<Publisher> {
    const publisher: Publisher = new Publisher();
    publisher.name = updatePublisherDto.name;
    publisher.id = id;
    return await this.publisherRepository.save(publisher);
  }

  async remove(id: number): Promise<void> {
    await this.publisherRepository.delete(id);
  }
}
