const express = require("express");
const app = express();
const port = 8080;
//npm install --save-dev nodemon

app.use(express.json())

app.get("/", function(req, res) {
    res.send("Minha primeira requisição")
})

app.get("/segunda", function(req, res) {
    res.send("Minha 2ª requisição")
})

app.get("/com-parametros", function(req, res) {
    if (req.query.nome === "Jennifer") {
        res.send("Jennifer chamou requisição")
    }
    res.send("Com parâmetros funciona! Sabadou, " + req.query.nome + " " + req.query.sobrenome)
})

app.post("/meu-primeiro-post", function(req, res) {
    console.log(req.body);
    res.send("Meu post funciona")
})

app.put("/meu-primeiro-put/:id", function(req, res) {
    console.log(req.body, req.params.id)
    res.send("Meu put funciona")
})

app.delete("/meu-primeiro-delete/:id", function(req, res) {
    console.log(req.params.id)
    res.send("Meu delete funciona " + req.params.id)
})

app.listen(port, function() {
    console.log("Ouvindo a porta: ", port);
}) 