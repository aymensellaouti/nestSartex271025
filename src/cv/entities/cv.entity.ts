import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TimeStampEntity } from "../../common/db/timestamp.entity";

@Entity('cv')
export class Cv extends TimeStampEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
    @Column()
    age: number;
    @Column()
    job: string;
    @Column()
    path: string;
}
