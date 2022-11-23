import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("funcionarios")
export class Funcionarios{
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    endereco: string;

    @Column()
    dataadmissao: Date;
    
    @Column()
    dataaniversario: Date;

    @Column()
    telefone: string;

}