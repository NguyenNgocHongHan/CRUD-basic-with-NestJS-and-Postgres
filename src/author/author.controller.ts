import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  create(@Body() author: CreateAuthorDto) {
    return this.authorService.create(author);
  }

  @Get()
  findAll() {
    return this.authorService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorService.getById(+id);
  }

  @Patch(':id')
  updateAllAttributeOfAuthor(
    @Param('id') id: string,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ) {
    return this.authorService.update(+id, updateAuthorDto);
  }

  @Put(':id')
  updateAuthor(
    @Param('id') id: string,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ) {
    return this.authorService.update(+id, updateAuthorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorService.remove(+id);
  }
}
