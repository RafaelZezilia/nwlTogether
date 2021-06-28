import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserReceiveComplimentsService {

  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = await complimentsRepositories.find({
      where: {
        user_receiver: user_id,
      },
      //Busca encadeada, traz todas as relações do objeto
      //Porém, deixa a busca mais lenta, dependendo da quantidade de objs cadastrados
      relations: ["userSender", "userReceiver", "tag"],
    })

    return compliments;
  }
}

export { ListUserReceiveComplimentsService }