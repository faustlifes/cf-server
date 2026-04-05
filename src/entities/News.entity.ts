import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('news')
export class NewsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  src: string;

  @Column({ type: 'date' })
  date: string;

  @Column()
  title: string;

  @Column()
  text: string;
}
