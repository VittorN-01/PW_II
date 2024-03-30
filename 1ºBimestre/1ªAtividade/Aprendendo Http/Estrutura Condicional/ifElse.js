const http = require("http")
const url = require("url")

const porta = 5000

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    res.write(`
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exercício Maior/Menor de Idade</title>
    </head>
    `); 

    console.log("Exercício Maior/Menor de Idade")
    const urlInfo = url.parse(req.url, true)
    const anoNasc = parseInt(urlInfo.query.anoNasc)
    const anoAtual = parseInt(urlInfo.query.anoAtual)

    res.statusCode = 200
    
    res.write("<h1>Veja se você é Maior ou Menor de Idade</h1>")

    if(isNaN(anoNasc) || isNaN(anoAtual)){
        res.end(
            "<form method='GET' action='http://localhost:5000/'>" +
                "<label>Ano de Nascimento</label>" +
                "<br>" +
                "<input type='text' name='anoNasc' />" +
                "<br>" +
                "<br>" +
                "<label>Ano Atual</label>" +
                "<br>" +
                "<input type='text' name='anoAtual' />" +
                "<br>" +
                "<input type='submit' value='ENVIAR'/>" +
            "</form>"
        )
    } else {
        const idade = anoAtual - anoNasc
        res.end(`<h2>Você tem ${idade} anos</h2>`)
    }
}).listen(porta, () => {
    console.log(`Servidor rodando na porta: ${porta}`)
})
