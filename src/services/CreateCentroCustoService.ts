
import { AppDataSource } from "../database"
import { CentroCusto } from "../entities/centroCusto";

type CentroCustoResquest = {
    descricao: string;
}

export class CreateCentroCutoService {
    async execute ({descricao}: CentroCustoResquest) : Promise < CentroCusto | Error>{

        const repo = AppDataSource.getRepository( CentroCusto );

        const centroCusto = repo.manager.create(CentroCusto,{
            descricao,
        });

        await repo.manager.save(centroCusto);

        return centroCusto;

    }
}