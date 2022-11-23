import { Request, Response } from "express";
import { CreateCentroCutoService } from "../services/CreateCentroCustoService";

export class CreateCentroCutoController{
    async handle( request: Request, response: Response ){
        const { descricao } = request.body;
        const service = new CreateCentroCutoService();

        const result = await service.execute({ descricao });

        if ( result instanceof Error ){
            return response.status(400).json(result.message);
        }

        return response.json(result)
    }
}