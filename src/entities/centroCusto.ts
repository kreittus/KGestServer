import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("centrocusto")
export class CentroCusto{
    @PrimaryColumn()
    id: number;

    @Column()
    descricao: string;

}