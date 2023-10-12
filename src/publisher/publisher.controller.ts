import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';

@Controller('publisher')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Post()
  create(@Body() publisher: CreatePublisherDto) {
    return this.publisherService.create(publisher);
  }

  @Get()
  findAll() {
    return this.publisherService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publisherService.getById(+id);
  }

  @Get('books')
  getBooks(@Body('publisherID', ParseIntPipe) publisherID: number) {
    return this.publisherService.getBooksOfPublisher(publisherID);
  }

  @Patch(':id')
  updateAllAttribute(
    @Param('id') id: string,
    @Body() updatePublisherDto: UpdatePublisherDto,
  ) {
    return this.publisherService.update(+id, updatePublisherDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePublisherDto: UpdatePublisherDto,
  ) {
    return this.publisherService.update(+id, updatePublisherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publisherService.remove(+id);
  }
}
