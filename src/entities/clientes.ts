import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("clientes")
export class Clientes{
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;
    @Column()
    endereco: string;

    @Column()
    dataaniversario: Date;

    @Column()
    telefone: string;

    @Column()
    email: string;

}