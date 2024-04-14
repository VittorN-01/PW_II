const http = require("http")
const url = require("url")

const porta = 5000

console.log("Exercício Tabuada; Exercício Vetor")

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    res.write(`
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exercício Tabuada; Exercício Vetor</title>
    </head>
    `);

    
    const urlInfo = url.parse(req.url, true)
    const num = parseInt(urlInfo.query.num)

    res.statusCode = 200

    res.write("<h1>Veja a Tabuada de qualquer Número</h1>")

    if(isNaN(num)) {
        res.end(
            "<form method='GET' action='http://localhost:5000/'>" +
                "<label>Número</label>" +
                "<br>" +
                "<input type='text' name='num' />" +
                "<br>" +
                "<br>" +
                "<input type='submit' value='ENVIAR' />" +
            "</form>"
        );
    } else {
        var array = []
        res.write("<ul>")
        for(let i = 0; i < 11; i++){
            array [i] = num * i;
            res.write(`<li>${num} x ${i} = ${array[i]}</li>`)
            console.log(num + " x " + i + " = " + array[i])
        }
        res.write("</ul>")
        res.end();
    }
}).listen(porta, () => {
    console.log(`Servidor rodando na porta: ${porta}`);
});
