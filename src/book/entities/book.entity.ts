import { Author } from 'src/author/entities/author.entity';
import { Publisher } from 'src/publisher/entities/publisher.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ schema: 'dbBookstore' })
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  description: string;

  @Column({ default: 0, type: 'decimal', nullable: true })
  price: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  typeBook: string;

  @ManyToOne((type) => Publisher, (publisher) => publisher.books)
  publisher: Publisher;

  @ManyToMany((type) => Author)
  @JoinTable()
  authors: Author[];
}
