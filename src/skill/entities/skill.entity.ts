import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStampEntity } from '../../common/db/timestamp.entity';
import { Cv } from '../../cv/entities/cv.entity';
@Entity('skill')
export class Skill extends TimeStampEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  designation: string;
  @ManyToMany(() => Cv, cv => cv.skills)
  cvs: Cv[];
}