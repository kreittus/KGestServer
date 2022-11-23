
import { AppDataSource } from "../database"
import { Clientes } from "../entities/clientes";

type ClientesResquest = {
    name: string;
    endereco: string;
    dataaniversario: Date;
    telefone: string;
    email: string;
}

export class CreateClientesService {
    async execute ({name, endereco, dataaniversario, telefone, email}: ClientesResquest) : Promise < Clientes | Error>{

        const repo = AppDataSource.getRepository( Clientes );

        const cliente = repo.manager.create(Clientes,{
            name,
            endereco,
            dataaniversario,
            telefone,
            email
        });

        await repo.manager.save(cliente);

        return cliente;

    }
}