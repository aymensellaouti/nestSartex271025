import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from 'typeorm';
import { TimeStampEntity } from '../../common/db/timestamp.entity';

export enum UserRoleEnum {
  admin = 'admin',
  user = 'user',
}

@Entity('user')
export class User extends TimeStampEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    unique: true,
  })
  username: string;
  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

}
