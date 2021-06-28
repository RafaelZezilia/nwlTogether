import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { classToPlain } from "class-transformer" //excluir a senha na hora da busca

class ListUsersService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const users = await usersRepositories.find();

    return classToPlain(users);
  }
}

export { ListUsersService };