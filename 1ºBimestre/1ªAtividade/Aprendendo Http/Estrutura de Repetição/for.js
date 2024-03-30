const http = require("http")
const url = require("url")

const porta = 5000

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    res.write(`
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exercício Potência</title>
    </head>
    `);
    console.log("Exercício Potência")
    const urlInfo = url.parse(req.url, true)
    const base = parseInt(urlInfo.query.base)
    const expoente = parseInt(urlInfo.query.expoente)

    res.statusCode = 200
    
    res.write("<h1>Veja se você é Maior ou Menor de Idade</h1>")

    if (isNaN(base) || isNaN(expoente)){
        res.end(
            "<form method='GET' action='http://localhost:5000/'>" +
                "<label>Coloque a Base</label>" +
                "<br>" +
                "<input type='text' name='base' />" +
                "<br>" +
                "<label>Coloque o Expoente</label>" +
                "<br>" +
                "<input type='text' name='expoente' />" +
                "<br>" +
                "<input type='submit' value='ENVIAR'/>" +
            "</form>"
        )
    } else {
        let p = 1;
        for (let i= 1; i <= expoente; i++){
            p *= base;
        }

        res.end(`<h2>Potenciação: ${p} </h2>`)
    }
}).listen(porta, () => {
    console.log(`Servidor rodando na porta: ${porta}`)
})