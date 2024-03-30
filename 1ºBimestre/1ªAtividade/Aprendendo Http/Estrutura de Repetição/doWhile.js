const http = require("http");
const url = require("url");

const porta = 5000;

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    res.write(`
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exercício Tabuada</title>
    </head>
    `);

    console.log("Exercício Tabuada");
    const urlInfo = url.parse(req.url, true);
    const num = parseInt(urlInfo.query.num);

    res.statusCode = 200;

    res.write("<h1>Tabuada de um número</h1>");

    if (isNaN(num)) {
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
        let i = 1;
        res.write(`<h2>Tabuada do ${num}</h2>`);
        res.write("<ul>");
        do {
            res.write(`<li>${num} x ${i} = ${num * i}</li>`);
            i++;
        } while (i <= 10);
        res.write("</ul>");
        res.end();
    }
}).listen(porta, () => {
    console.log(`Servidor rodando na porta: ${porta}`);
});
