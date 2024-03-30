const http = require("http");
const url = require("url");
const calcularNota = require("./calcularNota.js");

const porta = 5000;

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    res.write(`
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exercício Média; Exercício Modularização</title>
    </head>
    `);

    console.log("Exercício Média; Exercício Modularização");
    const urlInfo = url.parse(req.url, true);
    const nota1 = parseFloat(urlInfo.query.nota1);
    const nota2 = parseFloat(urlInfo.query.nota2);
    const nota3 = parseFloat(urlInfo.query.nota3);
    const nota4 = parseFloat(urlInfo.query.nota4);

    res.statusCode = 200;

    res.write("<h1>Veja a sua Média</h1>");

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        res.end(
            "<form method='GET' action='http://localhost:5000/'>" +
                "<label>1ª Nota</label>" +
                "<br>" +
                "<input type='text' name='nota1' />" +
                "<br>" +
                "<br>" +
                "<label>2ª Nota</label>" +
                "<br>" +
                "<input type='text' name='nota2' />" +
                "<br>" +
                "<br>" +
                "<label>3ª Nota</label>" +
                "<br>" +
                "<input type='text' name='nota3' />" +
                "<br>" +
                "<br>" +
                "<label>4ª Nota</label>" +
                "<br>" +
                "<input type='text' name='nota4' />" +
                "<br>" +
                "<br>" +
                "<input type='submit' value='ENVIAR' />" +
            "</form>"
        );
    } else {
        const media = calcularNota(nota1, nota2, nota3, nota4);
        if (media >= 6) {
            res.end(`Média: ${media}, PASSOU!`);
        } else if (media >= 5) {
            res.end(`Média: ${media}, Recuperação`);
        } else {
            res.end(`Média: ${media}, Reprovado`);
        }
    }
}).listen(porta, () => {
    console.log(`Servidor rodando na porta: ${porta}`);
});
