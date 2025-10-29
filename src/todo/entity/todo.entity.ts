import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { TodoStatusEnum } from "../todo.model";
import { TimeStampEntity } from "../../common/db/timestamp.entity";

@Entity('todo')
export class TodoEntity extends TimeStampEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    length: 16
  })
  name: string;
  @Column({
    length: 50
  })
  description: string;
  @Column({
    type: 'enum',
    enum: TodoStatusEnum,
    default: TodoStatusEnum.waiting,
  })
  status: TodoStatusEnum;
  
}