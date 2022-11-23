import { Request, Response } from "express";
import { CreateFuncionarioService } from "../services/CreateFuncionariosService";

export class CreateFuncionarioController{
    async handle( request: Request, response: Response ){
        const { name, endereco, dataadmissao ,dataaniversario, telefone } = request.body;
        const service = new CreateFuncionarioService();

        const result = await service.execute({name, endereco, dataadmissao ,dataaniversario, telefone });

        if ( result instanceof Error ){
            return response.status(400).json(result.message);
        }

        return response.json(result)
    }
}