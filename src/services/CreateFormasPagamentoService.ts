
import { AppDataSource } from "../database"
import { FormasPagamento } from "../entities/formasPagamento";

type FormasPagamentosResquest = { 
    descricao: string;
    taxa: number;
}

export class CreateFormasPagamentoService {
    async execute ({descricao,taxa}: FormasPagamentosResquest) : Promise < FormasPagamento | Error>{

        const repo = AppDataSource.getRepository( FormasPagamento );

        const formasPagamento= repo.manager.create(FormasPagamento,{
            descricao,
            taxa,
        });

        await repo.manager.save(formasPagamento);

        return formasPagamento;

    }
}