const sqlite3 = require("sqlite3")
const { open } = require("sqlite") //Deste jeito o JS vai dentro do SQlite e busca só a variavel open

module.exports = () =>
  open({
    filename: './src/db/rocketq.sqlite',
    driver: sqlite3.Database,
  });
