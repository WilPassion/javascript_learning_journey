// API - Conjunto de métodos para se comunicar (fazer CRUD) via HTTP com a web/server

// O que é REST e RESTful?
// Quando falamos em API estamos condicionados a falar de REST e RESTful também;
// REST = Representational State Transfer, princípios e regras que permitem criar uma aplicação com interfaces bem definidas;
// RESTful = Capacidade de aplicar os princípios do REST;

// REST e os verbos HTTP
// Sempre que criamos uma API devemos utilizar os verbos HTTP corretos para cada URL da nossa aplicação (veremos isso na prática);
// Verbo GET: para solicitar dados;
// Verbo POST: para inserir dados;
// Verbo DELETE: para deletar dados;
// Verbo PUT: para atualizar dados;

/* INICIANDO...

* npm init -y (para teste apenas)

* npm init

* npm install express INICIANDO... */

/* let express = require("express");
let app = express();

app.get("/", function(req, res) {
    res.send("Primeira rota em Express");
})

app.listen(3000, function() {
    console.log("A aplicação está funcionando na porta 3000");
}) */

// COM ARROW FUNCTION

let express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.send("Primeira rota em Express");
});

app.listen(3000, () => {
    console.log("A aplicação está funcionando na porta 3000");
});

// POSTMAN - software para testar API's - quando ainda não há interface gráfica na solução
// posdemos testar por meio dele as rotas de nossa API