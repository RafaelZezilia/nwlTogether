import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories"



interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    //verificar se email existe
    const user = await usersRepositories.findOne({
      email
    });

    if (!user) {
      throw new Error("Email/Password Incorrect")
    }

    //verificar se senha está correta

    // comparar senha 12345 / 340dawdaw68-adw56a8dw4d
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password Incorrect")
    }

    //gerar o token
    const token = sign({
      email: user.email
    }, "208784feb4163b36d766e7cbf8e42206", {
      subject: user.id,
      expiresIn: "1d"
    }
    );

    return token;
  }
}

export { AuthenticateUserService }