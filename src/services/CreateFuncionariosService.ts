
import { AppDataSource } from "../database"
import { Funcionarios } from "../entities/funcionarios";

type FuncionariosResquest = {
    name: string;
    endereco: string;
    dataadmissao: Date;
    dataaniversario: Date;
    telefone: string;
}

export class CreateFuncionarioService {
    async execute ({name, endereco, dataadmissao ,dataaniversario, telefone}: FuncionariosResquest) : Promise < Funcionarios | Error>{

        const repo = AppDataSource.getRepository( Funcionarios );

        const funcionario = repo.manager.create(Funcionarios,{
            name,
            endereco,
            dataadmissao,
            dataaniversario,
            telefone,
        });

        await repo.manager.save(funcionario);

        return funcionario;

    }
}