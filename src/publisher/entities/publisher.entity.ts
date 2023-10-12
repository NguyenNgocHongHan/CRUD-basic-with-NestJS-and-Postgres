import { Book } from 'src/book/entities/book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'dbBookstore' })
export class Publisher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @OneToMany((type) => Book, (book) => book.publisher)
  books: Book[];
}
