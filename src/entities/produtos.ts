import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("produtos")
export class Produtos{
    @PrimaryColumn()
    id: number;

    @Column()
    descricao: string;

    @Column()
    precocompra: number;

    @Column()
    precovenda: number;

    @Column()
    margemlucro: number;

    @Column()
    tipoprod: string;

    @Column()
    estoqueprod: string;
}