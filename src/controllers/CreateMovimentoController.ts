import { Request, Response } from "express";
import { CreateMovimentoService } from "../services/CreateMovimentoService";

export class CreateMovimentoController{
    async handle( request: Request, response: Response ){
        const{
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
            taxaformapagamento,} = request.body;
        const service = new CreateMovimentoService();

        const result = await service.execute({ 
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

        if ( result instanceof Error ){
            return response.status(400).json(result.message);
        }

        return response.json(result)
    }
}