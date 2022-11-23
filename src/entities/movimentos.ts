import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("movimento")
export class Movimentos{
    @PrimaryColumn()
    id: number;

    @Column()
    qtde: number;

    @Column()
    funcionario: string;

    @Column()
    tipomovi: string;

    @Column()
    idmovi: number;
    
    @Column()
    datamovi: Date; 
    
    @Column()
    valormovi: number;
    
    @Column()
    hourmovi: Date;
    
    @Column()
    produto: string;

    @Column()
    idprod: number;

    @Column()
    idfuncionario: number;

    @Column()
    valortotalitem: number;

    @Column()
    idformapagamento: number;

    @Column()
    descformapagamento: string;

    @Column()
    centrocusto: string;

    @Column()
    idcentrocusto: number;

    @Column()
    taxaformapagamento: number;

}