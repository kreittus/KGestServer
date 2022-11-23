import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("formaspagamento")
export class FormasPagamento{
    @PrimaryColumn()
    id: number;

    @Column()
    descricao: string;

    @Column()
    taxa: number;

}