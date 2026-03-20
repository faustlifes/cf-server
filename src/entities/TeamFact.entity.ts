import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('team_facts')
export class TeamFactEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  favicon: string;

  @Column()
  number: number;

  @Column()
  title: string;
}
