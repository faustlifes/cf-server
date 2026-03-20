import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('service_items')
export class ServiceItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  img: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  text: string;
}
