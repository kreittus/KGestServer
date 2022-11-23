import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("users")
export class Users{
    @PrimaryColumn()
    users: string;

    @Column()
    passwords: string;

    @Column()
    tipo:string;

    @Column()
    empresa:string;
}