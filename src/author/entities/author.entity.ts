import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'dbBookstore' })
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'timestamptz', nullable: true })
  birthday: Date;

  @Column({ type: 'varchar', length: 50, nullable: true })
  nationality: string;

  @Column({ type: 'enum', enum: ['m', 'f', 'u'], nullable: true })
  gender: string;
}
