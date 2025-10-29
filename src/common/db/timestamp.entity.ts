import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";

export class TimeStampEntity {

    @CreateDateColumn({
        update: false,
        name: 'created_at'
    })
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: Date;

    @VersionColumn()
    version: number;
}