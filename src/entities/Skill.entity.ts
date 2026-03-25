import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { AboutContentEntity } from './AboutContent.entity';

@Entity('skills')
export class SkillEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  text: string;

  @Column()
  width: string;

  @Column()
  backgroundColor: string;

  @ManyToOne(() => AboutContentEntity, (about) => about.skills, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'about_id' })
  about: AboutContentEntity;
}
