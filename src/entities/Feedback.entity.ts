import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('feedback')
export class FeedbackEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  message: string;
}
