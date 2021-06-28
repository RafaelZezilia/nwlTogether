import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken" //verificar se é um token válido

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NewableFunction
) {
  //Receber o token
  const authToken = request.headers.authorization

  //Validar se o token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ") //cortar o Bearer inicial do token
  //console.log(token);

  try {
    //Validar se token é valido
    const { sub } = verify(token, "208784feb4163b36d766e7cbf8e42206") as IPayload;

    //Recuperar informações do usuário 
    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }


}