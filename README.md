<h1 align="center">CRUD de Produtos</h1>


## Índice

- [Descrição](#page_facing_up-descrição)
- [Funcionalidades](#sparkles-funcionalidades)
- [Principais ferramentas](#hammer_and_wrench-principais-ferramentas)
- [Como usar a aplicação](#computer-como-usar-a-aplicação)
- [Autor](#memo-autor)


## :page_facing_up: Descrição

Esse é um projeto fullstack desenvolvido com NODE.js e Typescript no backend, React no frontend e MySQL como banco de dados relacional. Mais informações sobre tecnologias podem ser vistas na parte de [Ferramentas](#hammer_and_wrench-ferramentas).

O usuário poderá ver os produtos cadastrados e ao criar sua conta e fazer login, também poderá criar, alterar e deletar os produtos.


## :sparkles: Funcionalidades
<details>
  <summary><strong>Ver mais</strong></summary>

:heavy_check_mark: Criar uma conta

:heavy_check_mark: Login

:heavy_check_mark: Registrar novos produtos

:heavy_check_mark: Editar produtos

:heavy_check_mark: Deletar produtos

:heavy_check_mark: Visualizar produtos

:heavy_check_mark: Filtrar produtos por nome ou descrição
</details>


## :hammer_and_wrench: Principais Ferramentas
<details>
  <summary><strong>Ver mais</strong></summary>

* [NODE.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/pt-br/) para criar o servidor web
* [Express-async-errors](https://www.npmjs.com/package/express-async-errors) para capturar erros
* [JWT](https://jwt.io/) para autenticar e validar um usuário
* [Nodemon](https://nodemon.io/) para monitorar a aplicação em tempo real durante o desenvolvimento
* [Prisma](https://www.prisma.io/) como ORM para mapear o banco de dados
* [MySQL](https://www.mysql.com/) para banco de dados
* [Zod](https://zod.dev/) para validar dados vindos de requisições e criar interfaces
* [React](https://react.dev/) para desenvolver o frontend
* [Chakra UI](https://chakra-ui.com/) para estilizar o frontend
* [Yup](https://www.npmjs.com/package/yup) para validar formulários no frontend
* [Typescript](https://www.typescriptlang.org/) para criar uma aplicação mais sólida
* [Dotenv](https://www.npmjs.com/package/dotenv) para usar variáveis de ambiente
* [Eslint](https://eslint.org/) para padronizar o código e evitar code-smells
* [Docker](https://www.docker.com/) para conteinirizar a aplicação
</details>


## :computer: Como usar a aplicação

No Postman você pode encontrar a documentação da API: https://documenter.getpostman.com/view/28244152/2s9YR6buRN

<details>
  <summary><strong>Pré-requisitos</strong></summary>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js (v16)](https://nodejs.org/en/)
- [Git](https://git-scm.com)
- [MySQL](https://www.mysql.com/)
</details>

<details>
  <summary><strong>Rodando a aplicação localmente</strong></summary>
1 - Clone esse repositório para sua máquina com o seguinte comando no terminal:

```
 git clone git@github.com:Leo02452/crud-produtos.git
```

2 - Entre na pasta criada e em seguida entre no backend:

```
 cd crud-produtos/app/backend
```

3 - Configure as variavéis de ambiente (exemplos estão app/backend/.env.example)

4 - Execute a migração e seeder do banco de dados:

```
 npm run db:start
```

5 - Instale as dependências:

```
 npm install
```

6 - Inicie o backend:

```
 npm start
```

7 - Em um segundo terminal, navegue até a pasta do frontend:

```
 cd crud-produtos/app/frontend
```

8 - Instale as dependências:

```
 npm install
```
9 - Configure as variavéis de ambiente (exemplos estão app/frontend/.env.example)

10 - Inicie o frontend:

```
 npm start
```
</details>


## :memo: Autor

Desenvolvido por Leonardo Araujo

Email: leonardo_02452@hotmail.com

Github: https://github.com/Leo02452

LinkedIn: https://www.linkedin.com/in/leo02452/

---
