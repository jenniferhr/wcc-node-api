const express = require("express");
const app = express();
const port = 8080;
//npm install --save-dev nodemon

app.use(express.json())

app.get("/", function(req, res) {
    res.send("Dasa Educa - Artigos")
})


app.listen(port, function() {
    console.log("Ouvindo a porta: ", port);
}) 