import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('portfolio_items')
export class PortfolioItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  src: string;

  @Column()
  title: string;

  @Column()
  category: string;
}
