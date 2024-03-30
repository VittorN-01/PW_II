const http = require("http");
const url = require("url");

const porta = 5000;

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    res.write(`
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exercício Variável (Var)</title>
    </head>
    `); 

    console.log("Exercício Variável (Var)");
    const urlInfo = url.parse(req.url, true);
    var nome = urlInfo.query.nome;

    res.statusCode = 200;

    res.write("<h1>Mini Cadastro</h1>");

    if(!nome){
        res.end(
            "<form method='GET' action='http://localhost:5000/'>" +
                "<label>Digite seu nome:</label>" +
                "<br>" +
                "<input type='text' name='nome' />" +
                "<br>" +
                "<input type='submit' value='ENVIAR'/>" +
            "</form>"
        );
    } else {
        res.end(`<h2>Seja bem-vindo(a) ${nome}, seu cadastro foi finalizado!</h2>`);
    }
}).listen(porta, () => {
    console.log(`Servidor rodando na porta: ${porta}`);
});
