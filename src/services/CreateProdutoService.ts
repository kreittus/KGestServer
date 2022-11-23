
import { AppDataSource } from "../database"
import { Produtos } from "../entities/produtos";

type ProdutoResquest = {
    descricao: string;
    precocompra: number;
    precovenda: number;
    margemlucro: number;
    tipoprod: string;
    estoqueprod: string;
}

export class CreateProdutoService {
    async execute ({ 
        descricao,
        precocompra,
        precovenda,
        margemlucro,
        tipoprod,
        estoqueprod,
    }: ProdutoResquest) : Promise < Produtos | Error>{

        const repo = AppDataSource.getRepository( Produtos );

        const produto = repo.manager.create(Produtos,{
            descricao,
            precocompra,
            precovenda,
            margemlucro,
            tipoprod,
            estoqueprod,
        });

        await repo.manager.save(produto);

        return produto;

    }
}