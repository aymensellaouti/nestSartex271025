import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TimeStampEntity } from "../../common/db/timestamp.entity";
import { Skill } from "../../skill/entities/skill.entity";
import { User } from "../../user/entities/user.entity";

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
    @ManyToOne(() => User)
    user: User;

    @ManyToMany(() => Skill, skill => skill.cvs, {eager: true})
    @JoinTable({
        name: 'cv_skills',
        joinColumn: {
            name: 'cv'
        },
        inverseJoinColumn: {
            name: 'skill'
        }
    })
    skills: Skill[];
}
