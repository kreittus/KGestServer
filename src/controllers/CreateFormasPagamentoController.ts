import { Request, Response } from "express";
import { CreateFormasPagamentoService } from "../services/CreateFormasPagamentoService";

export class CreateFormasPagamentoController{
    async handle( request: Request, response: Response ){
        const { descricao,taxa } = request.body;
        const service = new CreateFormasPagamentoService();

        const result = await service.execute({ descricao,taxa });

        if ( result instanceof Error ){
            return response.status(400).json(result.message);
        }

        return response.json(result)
    }
}