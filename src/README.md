# NLW Valoriza


## Regras

- cadastro de usuário

  [ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  [ x ] Não é permitido cadastrar usuário sem e-mail

- cadastro de TAG 
  
  [ x ] Não é permitido cadastrar tag sem nome

  [ x ] Não é permitido cadastrar mais de uma tag com o mesmo nome

  [ x ] Não é permitido o cadastro por usuários que não sejam administradores



- Cadastro de elogios 

  [ x ] Não é permitido um usuário cadastrar um elogio para si

  [ x ] Não é permitido cadastrar elogios para usuários inválidos

  [ x ] O usuário precisa estar autenticado na aplicação

  /* PARA USAR NO ORMCONFIG.JSON COM POSTGRESS e instalar o driver 
  //link para info https://typeorm.io/#/using-ormconfig
module.exports = {
   "type": "mysql",
   "host": "localhost",
   "port": 3306,
   "username": "test",
   "password": "test",
   "database": "test"
}
*/