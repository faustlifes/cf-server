import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teammates')
export class TeammateEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  src: string;

  @Column()
  name: string;

  @Column()
  position: string;

  @Column({ type: 'json', nullable: true })
  social: any;
}
