import { Request, Response } from "express";
import { CreateClientesService } from "../services/CreateClientesService";

export class CreateClientesController{
    async handle( request: Request, response: Response ){
        const { name, endereco, dataaniversario, telefone, email } = request.body;
        const service = new CreateClientesService();

        const result = await service.execute({name, endereco, dataaniversario, telefone, email });

        if ( result instanceof Error ){
            return response.status(400).json(result.message);
        }

        return response.json(result)
    }
}