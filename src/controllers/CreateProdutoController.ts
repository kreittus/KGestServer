import { Request, Response } from "express";
import { CreateProdutoService } from "../services/CreateProdutoService";

export class CreateProdutoController{
    async handle( request: Request, response: Response ){
        const{
            descricao,
            precocompra,
            precovenda,
            margemlucro,
            tipoprod,
            estoqueprod,} = request.body;
        const service = new CreateProdutoService();

        const result = await service.execute({ 
            descricao,
            precocompra,
            precovenda,
            margemlucro,
            tipoprod,
            estoqueprod 
            });

        if ( result instanceof Error ){
            return response.status(400).json(result.message);
        }

        return response.json(result)
    }
}