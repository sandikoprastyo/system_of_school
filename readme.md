# sequelize cli

## seeder data dummy

#### seeder

npx sequelize-cli db:seed:all

#### seeder undo

npx sequelize-cli db:seed:undo

#### seeder undo all

npx sequelize-cli db:seed:undo:all

#### seeder generate

npx sequelize-cli seed:generate --name demo-users(table name)

## migrate

#### migrate

npx sequelize-cli db:migrate

#### migrate undo

npx sequelize-cli db:migrate:undo

#### migrate undo all

npx sequelize-cli db:migrate:undo:all

#### migrate generate

npx sequelize-cli model:generate --name Category --attributes idCategory:uuid,name:string,description:string


[documentacion sequlize cli](https://sequelize.org/docs/v7/cli/#installing-the-cli)