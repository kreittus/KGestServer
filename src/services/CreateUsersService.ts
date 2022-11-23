
import { AppDataSource } from "../database"
import { Users } from "../entities/users";

type UsersResquest = {
    users: string;
    passwords: string;
    tipo:string;
    empresa:string;
}

export class CreateUsersService {
    async execute ({users, passwords, tipo, empresa}: UsersResquest) : Promise < Users | Error>{

        const repo = AppDataSource.getRepository( Users );

        const user = repo.manager.create(Users,{
            users, 
            passwords, 
            tipo, 
            empresa
        });

        await repo.manager.save(user);

        return user;

    }
}