const Database = require("./config") //Importando o config

const initDb = {
  async init() { //async e await tem que sempre estarem juntos. Então sempre q for usar await a função tem que começar com async
    const db = await Database() //O await vai rodar somente quando o Database terminar de ser executado e ai sim pular para o db.exec()

    await db.exec(`CREATE TABLE rooms (
      id INTEGER PRIMARY KEY,
      pass TEXT
    )`);

    await db.exec(`CREATE TABLE questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      read INT,
      room INT
    )`);

    await db.close()
  }
}

initDb.init()