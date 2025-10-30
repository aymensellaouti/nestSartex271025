import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStampEntity } from '../../common/db/timestamp.entity';
@Entity('skill')
export class Skill extends TimeStampEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  designation: string;
}