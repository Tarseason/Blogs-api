# Blogs Api 👺
  Nesse projeto foi desenvolvido uma API e um banco de dados para a produção de conteudo para um blog em **Node.js** usando o pacote sequelize para fazer um CRUD de post.
  
  Sendo desenvolvido endpoints que estarão conectados ao seu banco de dados seguindo os principios do REST.
  Para fazer um post é necessario usuario e login.
  E sera necessaria a utilização de categorias para os posts, trabalhando, assim, a relação de **posts** para **categories** e de **categories** para **posts**
## Stacks:
**Back-end:** Node | Express | Docker  | JavaScript | SQL | Sequelize | JWT 
## Endpoints:
- post `/login`
- post `/user`
- get `/user`
- get `/user/:id`
- post `/categories`
- get `/categories`
- get `/post`
- get `/post/:id`
- put `/post/:id`
## Instalação
Instale Store Manager no seu terminal:
```bash
  git clone git@github.com:Tarseason/Blogs-api.git
  docker-compose up -d
  docker exec -it blogs_api bash
  npm install
  npm start ou npm run debug
```

## Populando Tabela
Com tudo pronto rode os comandos
- `"drop": "npx sequelize-cli db:drop"` Deleta o banco de dados
- `"prestart": "npx sequelize-cli db:create && npx sequelize-cli db:migrate"` Cria o banco e gera as tabelas
- `"seed": "npx sequelize-cli db:seed:all"` Popula a tabela;
