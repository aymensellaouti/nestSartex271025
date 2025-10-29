import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { TodoStatusEnum } from "../todo.model";

@Entity('todo')
export class TodoEntity {
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
  @Column()
  createdAt: Date = new Date();
}