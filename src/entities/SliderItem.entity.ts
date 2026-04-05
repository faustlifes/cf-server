import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('slider_items')
export class SliderItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'mediumtext' })
  img: string;

  @Column()
  title1: string;

  @Column()
  title2: string;

  @Column()
  subTitle: string;

  @Column({ type: 'text' })
  text: string;
}
