
import { AppDataSource } from "../database"
import { Movimentos } from "../entities/movimentos";

type MovimentoResquest = {
    qtde: number;
    funcionario: string;
    tipomovi: string;
    idmovi: number;
    datamovi: Date;
    valormovi: number;
    hourmovi: Date; 
    produto: string;
    idprod: number;
    idfuncionario: number;
    valortotalitem: number;
    idformapagamento: number;
    descformapagamento: string;  
    centrocusto: string;
    idcentrocusto: number;
    taxaformapagamento: number;
}

export class CreateMovimentoService {
    async execute ({ 
        qtde,
        funcionario,
        tipomovi,
        idmovi,
        datamovi,
        valormovi,
        hourmovi,
        produto,
        idprod,
        idfuncionario,
        valortotalitem,
        idformapagamento,
        descformapagamento,
        centrocusto,
        idcentrocusto,
        taxaformapagamento,
    }: MovimentoResquest) : Promise < Movimentos | Error>{

        const repo = AppDataSource.getRepository( Movimentos );

        const movimento = repo.manager.create(Movimentos,{
            qtde,
            funcionario,
            tipomovi,
            idmovi,
            datamovi,
            valormovi,
            hourmovi,
            produto,
            idprod,
            idfuncionario,
            valortotalitem,
            idformapagamento,
            descformapagamento,
            centrocusto,
            idcentrocusto,
            taxaformapagamento,
        });

        await repo.manager.save(movimento);

        return movimento;

    }
}