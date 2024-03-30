const http = require("http")
const url = require("url")

const porta = 5000

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    res.write(`
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exercício Restrição</title>
    </head>
    `);

    console.log("Exercício Restrição")
    const urlInfo = url.parse(req.url, true)
    const pl = parseFloat(urlInfo.query.pl)

    res.statusCode = 200

    res.write("<h1>Veja seu dia de Restição</h1>")

    if(isNaN(pl)){
        res.end(
            "<form method='GET' action='http://localhost:5000/'>" +
                "<label>Último dígito da sua placa</label>" +
                "<br>" +
                "<input type='text' name='pl' />" +
                "<br>" +
                "<input type='submit' value= 'ENVIAR' />" +
            "</form>"
        )
    }else {
        switch (pl){
            case 1: 
            case 2:
                res.end(`Dia de Restição: Segunda-Feira`)
                break;
            case 3:
            case 4:
                res.end(`Dia de Restição: Terça-Feira`)
                break;
            case 5:
            case 6:
                res.end(`Dia de Restição: Quarta-Feira`)
                break;
            case 7:
            case 8:
                res.end(`Dia de Restição: Quinta-Feira`)
                break;
            case 9:
            case 0:
                res.end(`Dia de Restição: Sexta-Feira`)
                break;
            default:
                res.end(`Inválido`)
        }
    }

}).listen(porta, () => {
    console.log(`Servidor rodando na porta: ${porta}`)
})