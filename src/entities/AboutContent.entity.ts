import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SkillEntity } from './Skill.entity';

@Entity('about_content')
export class AboutContentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  biography: string;

  @Column({ type: 'text' })
  historyHtml: string;

  @OneToMany(() => SkillEntity, (skill) => skill.about, { cascade: true })
  skills: SkillEntity[];
}
