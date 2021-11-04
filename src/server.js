const express = require('express');
const route = require('./route');
const path = require('path')
const server = express();

server.set('view engine', 'ejs')

server.use(express.static("public")) //Para iniciar a pasta public no localhost

//o path está pegando o caminho da pasta do projeto e o join está juntando o dirname se torna o src, ele é uma variavel global, está variavel se transforma no nome da pasta onde o arquivo onde o comando está dentro. Como está dentro do server, o dirname se torna o src. Basicamente ...c:Users\eduvi\Desktop\Discover\src\views
server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({ extended: true }))

server.use(route);

//Server listen passa uma porta de server.
server.listen(3000, () => console.log("RODANDO")); // ()=> Isso é uma Arrow Function é quando queremos rodar uma funcionalidade
