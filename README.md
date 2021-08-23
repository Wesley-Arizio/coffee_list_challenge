# Coffee List Challenge

## Sobre o Projeto

Coffee list é uma aplicação simples com o foco em listar bebidas a base de café, com comandos básicos CRUD, a aplicação utiliza uma API feita em node js para realizar as consultas

<br />

### Tecnologias utilizadas

- Node js v16.3
- Typescript
- Knex (QueryBuilder)
- Postgres
- React + typescript
- Styled Components
- Axios para requisições http

<br />

### Iniciar o Projeto

Clonar o repositório localmente

```tsx
git clone https://github.com/Wesley-Arizio/coffee_list_challenge.git
```

Navegar nas duas pastas principais **backend** e **frontend** e rodar o commando

```tsx
yarn install
```

Rodar o comando **docker** para iniciar uma imagem com o banco **postgres**

```docker
docker run --name image-name -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -e POSTGRES_DB=db_name -p 5432:5432 -d postgres
```

Setar variável de ambiente seguindo o arquivo **.env.sample** (em um novo arquivo chamado .env)

Navegar até o diretório **backend** e **frontend** e rodar o comando

```docker
yarn start
```

A pagina front end ficará disponível no link [http://localhost:3000](http://localhost:3000)

<br />

### Como está funcionando? Um pequeno video aqui.

[https://share.vidyard.com/watch/2tsMyKJBBeR86o5v5zG5yN](https://share.vidyard.com/watch/2tsMyKJBBeR86o5v5zG5yN)?

<br />

### Para fazer

- [ ] Upload e renderização de imagens no front end (no backend ja está pronto)
- [ ] Melhoria no tratamento de erros no front end (UI)
- [ ] Testes unitários e de integração na API
- [ ] Deploy 🙂
