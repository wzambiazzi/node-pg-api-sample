import UserModel from '../models/UserModel';
import { DataSource } from "typeorm"
//import { AppDataSource } from '../index'

class UserController {
    static get(id: string) {
        const users: Array<UserModel.User> = new Array();
        users.push(({
            id: id,
            name: 'Nome Usuário'
        } as UserModel.User));
        return users;
    }

    static async getAll():
        Promise<UserModel.User[]> {
        const users: Array<UserModel.User> = new Array();
        users.push(({
            id: '1',
            name: 'Wellington Zambiazzi'
        } as UserModel.User));
        users.push(({
            id: '2',
            name: 'João da Silva'
        } as UserModel.User));

        // const photoRepository = AppDataSource.getRepository('user');
        // const photoToUpdate = await photoRepository.findOneBy({
        //     id: 1,
        // })
        // console.log(photoToUpdate);

        return users;
    }
}

export default UserController;
