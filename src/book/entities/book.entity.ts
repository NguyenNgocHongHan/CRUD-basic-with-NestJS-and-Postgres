import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'dbBookstore' })
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ default: 0, type: 'decimal', nullable: true })
  price: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  typeBook: string;
}
