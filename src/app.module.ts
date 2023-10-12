import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './author/author.module';
import { Author } from './author/entities/author.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { Book } from './book/entities/book.entity';
import { PublisherModule } from './publisher/publisher.module';
import { Publisher } from './publisher/entities/publisher.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'han',
      username: 'postgres',
      entities: [Author, Book, Publisher],
      database: 'postgres',
      schema: 'dbBookstore',
      logging: true,
      synchronize: true,
      autoLoadEntities: true,
    }),
    BookModule,
    AuthorModule,
    PublisherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
