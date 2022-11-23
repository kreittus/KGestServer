import { Request, Response } from "express";
import { CreateUsersService } from "../services/CreateUsersService";

export class CreateUsersController{
    async handle( request: Request, response: Response ){
        const { users, passwords, tipo, empresa } = request.body;
        const service = new CreateUsersService();

        const result = await service.execute({users, passwords, tipo, empresa});

        if ( result instanceof Error ){
            return response.status(400).json(result.message);
        }

        return response.json(result)
    }
}