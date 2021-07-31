import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('role')
export class Role {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string

    // @ManyToMany(() => Role)
    // @JoinTable()
    // users: Role[];
}